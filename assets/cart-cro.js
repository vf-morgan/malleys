/**
 * Malleys cart CRO: free-shipping progress updates + cart recommendations.
 * Hooks into Fresh's existing wetheme.updateCartDrawer / cart Ajax flow.
 */
(function () {
  'use strict';

  var ROOT = (window.Shopify && window.Shopify.routes && window.Shopify.routes.root) || '/';
  var progressViewedThisOpen = false;
  var forceProgressView = false;
  var lastUnlocked = null;
  var recsCache = {};
  var lastCartKey = '';
  var lastCart = null;
  var fetchPatched = false;
  var impressedKeys = {};

  /** Plain currency string. Theme formatMoney prefixes a hidden "Your Cart Subtotal". */
  function formatMoneyPlain(cents) {
    var value = Number(cents) || 0;
    var negative = value < 0;
    value = Math.abs(value);
    var dollars = value / 100;
    var formatted =
      dollars % 1 === 0 ? String(dollars.toFixed(0)) : dollars.toFixed(2);
    var active =
      (window.Shopify && window.Shopify.currency && window.Shopify.currency.active) ||
      'USD';
    var symbol = active === 'USD' || active === 'CAD' || active === 'AUD' ? '$' : '';
    return (negative ? '-' : '') + symbol + formatted;
  }

  function sanitizeCopy(str) {
    return String(str || '')
      .replace(/<\/price>/gi, '')
      .replace(/<\/threshold>/gi, '')
      .replace(/<\/flat_rate>/gi, '');
  }

  function applyPlaceholders(template, map) {
    var out = sanitizeCopy(template);
    Object.keys(map).forEach(function (key) {
      out = out.split('<' + key + '>').join(map[key]);
    });
    return out;
  }

  function currencyRate() {
    if (window.Shopify && window.Shopify.currency && window.Shopify.currency.rate != null) {
      var rate = parseFloat(window.Shopify.currency.rate);
      return isNaN(rate) || rate <= 0 ? 1 : rate;
    }
    return 1;
  }

  function presentmentCents(shopCents, shopCurrency) {
    var active =
      (window.Shopify && window.Shopify.currency && window.Shopify.currency.active) || shopCurrency;
    if (!shopCurrency || active === shopCurrency) {
      return Math.round(Number(shopCents) || 0);
    }
    return Math.round((Number(shopCents) || 0) * currencyRate());
  }

  function qualifyingTotalFromCart(cart) {
    var total = Number(cart.total_price) || 0;
    (cart.items || []).forEach(function (item) {
      if (item.product_title && String(item.product_title).indexOf('Ice Pack') !== -1) {
        total -= Number(item.final_line_price) || 0;
      }
    });
    return Math.max(0, total);
  }

  function publishEvent(name, payload) {
    window.dataLayer = window.dataLayer || [];
    var data = Object.assign({ event: name }, payload || {});
    window.dataLayer.push(data);
    if (
      window.Shopify &&
      window.Shopify.analytics &&
      typeof window.Shopify.analytics.publish === 'function'
    ) {
      try {
        window.Shopify.analytics.publish(name, payload || {});
      } catch (e) {
        /* no-op */
      }
    }
  }

  function updateShippingFromCart(cart) {
    var containers = document.querySelectorAll('[data-free-shipping-msg]');
    if (!containers.length) return;

    var itemCount = Number(cart.item_count) || 0;
    var qualifying = qualifyingTotalFromCart(cart);

    containers.forEach(function (container) {
      var root = container.querySelector('[data-cart-cro-shipping]');
      if (itemCount === 0) {
        container.innerHTML = '';
        return;
      }

      if (!root) {
        /* Section may still be loading; wait for fetchSection. */
        return;
      }

      var shopCurrency = root.getAttribute('data-shop-currency');
      var threshold = presentmentCents(
        root.getAttribute('data-threshold-shop-cents'),
        shopCurrency
      );
      var flatRate = presentmentCents(
        root.getAttribute('data-flat-rate-shop-cents'),
        shopCurrency
      );
      var unlocked = qualifying >= threshold;
      var gap = Math.max(0, threshold - qualifying);
      var pct = threshold > 0 ? Math.min(100, (qualifying / threshold) * 100) : 100;
      var statusEl = root.querySelector('[data-cart-cro-status]');
      var flatEl = root.querySelector('[data-cart-cro-flat]');
      var fillEl = root.querySelector('[data-cart-cro-fill]');
      var barEl = root.querySelector('[data-cart-cro-progressbar]');
      var msgBelow = sanitizeCopy(root.getAttribute('data-msg-below') || '');
      var msgAchieved = sanitizeCopy(root.getAttribute('data-msg-achieved') || '');
      var msgFlat = sanitizeCopy(root.getAttribute('data-msg-flat') || '');

      var prevText = statusEl ? statusEl.textContent : '';
      var nextText = unlocked
        ? msgAchieved
        : applyPlaceholders(msgBelow, { price: formatMoneyPlain(gap) });

      if (statusEl && nextText && nextText !== prevText) {
        statusEl.textContent = nextText;
      }

      if (flatEl) {
        if (unlocked || !msgFlat) {
          flatEl.hidden = true;
        } else {
          flatEl.hidden = false;
          var thresholdDollars = (threshold / 100).toFixed(threshold % 100 === 0 ? 0 : 2);
          var flatDollars = (flatRate / 100).toFixed(flatRate % 100 === 0 ? 0 : 2);
          flatEl.textContent = applyPlaceholders(msgFlat, {
            threshold: thresholdDollars,
            flat_rate: flatDollars
          });
        }
      }

      root.classList.toggle('cart-cro-shipping--unlocked', unlocked);
      root.setAttribute('data-unlocked', unlocked ? 'true' : 'false');
      root.setAttribute('data-qualifying-total', String(qualifying));

      if (fillEl) {
        fillEl.style.setProperty('--cart-cro-progress', pct + '%');
      }
      if (barEl) {
        barEl.setAttribute('aria-valuemax', String(threshold));
        barEl.setAttribute('aria-valuenow', String(Math.min(qualifying, threshold)));
      }

      var drawer = document.getElementById('cartSlideoutWrapper');
      var drawerVisible = drawer && !drawer.classList.contains('slideout-panel-hidden');
      var onCartPage = !!document.getElementById('cartform');
      if (!progressViewedThisOpen && (forceProgressView || drawerVisible || onCartPage)) {
        progressViewedThisOpen = true;
        publishEvent('free_shipping_progress_viewed', {
          gap_amount: gap / 100,
          gap_cents: gap,
          threshold_cents: threshold,
          flat_rate_cents: flatRate,
          qualifying_cents: qualifying,
          currency:
            (cart.currency && (cart.currency.iso_code || cart.currency)) ||
            (window.Shopify && window.Shopify.currency && window.Shopify.currency.active) ||
            shopCurrency,
          unlocked: unlocked
        });
      }

      if (lastUnlocked === false && unlocked) {
        publishEvent('free_shipping_threshold_reached', {
          threshold_cents: threshold,
          qualifying_cents: qualifying,
          currency:
            (cart.currency && (cart.currency.iso_code || cart.currency)) ||
            (window.Shopify && window.Shopify.currency && window.Shopify.currency.active) ||
            shopCurrency
        });
      }
      lastUnlocked = unlocked;
    });
  }

  function isGiftLike(product) {
    if (product.gift_card) return true;
    var type = (product.type || '').toLowerCase();
    var handle = (product.handle || '').toLowerCase();
    var title = (product.title || '').toLowerCase();
    return (
      type.indexOf('gift card') !== -1 ||
      type.indexOf('giftcard') !== -1 ||
      handle.indexOf('gift-card') !== -1 ||
      title.indexOf('gift card') !== -1
    );
  }

  function isIcePack(product) {
    var title = (product.title || product.product_title || '').toLowerCase();
    var handle = (product.handle || '').toLowerCase();
    return title.indexOf('ice pack') !== -1 || handle.indexOf('ice-pack') !== -1;
  }

  function requiresSellingPlan(product) {
    return product.requires_selling_plan === true;
  }

  function cartProductIds(cart) {
    var ids = {};
    (cart.items || []).forEach(function (item) {
      ids[item.product_id] = true;
    });
    return ids;
  }

  function parseFallback(root) {
    var script = root.querySelector('[data-cart-recs-fallback]');
    if (!script) return [];
    try {
      return JSON.parse(script.textContent || '[]') || [];
    } catch (e) {
      return [];
    }
  }

  function fetchIntent(productId, intent) {
    var url =
      ROOT +
      'recommendations/products.json?product_id=' +
      encodeURIComponent(productId) +
      '&limit=10&intent=' +
      encodeURIComponent(intent);
    return fetch(url, { credentials: 'same-origin' })
      .then(function (res) {
        if (!res.ok) return { products: [], intent: intent };
        return res.json();
      })
      .then(function (data) {
        return {
          products: (data && data.products) || [],
          intent: (data && data.intent) || intent
        };
      })
      .catch(function () {
        return { products: [], intent: intent };
      });
  }

  function mergePool(cart, fallback) {
    var inCart = cartProductIds(cart);
    var seedIds = [];
    (cart.items || []).forEach(function (item) {
      if (item.product_title && String(item.product_title).indexOf('Ice Pack') !== -1) return;
      if (seedIds.indexOf(item.product_id) === -1) seedIds.push(item.product_id);
    });

    var requests = [];
    seedIds.slice(0, 3).forEach(function (id) {
      requests.push(fetchIntent(id, 'complementary'));
    });

    return Promise.all(requests).then(function (compResults) {
      var pool = [];
      var seen = {};

      function pushProduct(product, source) {
        if (!product || !product.id || seen[product.id]) return;
        if (!product.available) return;
        if (inCart[product.id]) return;
        if (isGiftLike(product)) return;
        if (isIcePack(product)) return;
        if (requiresSellingPlan(product)) return;
        seen[product.id] = true;
        var firstVariant =
          (product.variants &&
            product.variants.find(function (v) {
              return v.available;
            })) ||
          (product.variants && product.variants[0]) ||
          null;
        pool.push({
          id: product.id,
          title: product.title,
          handle: product.handle,
          url: product.url,
          available: product.available,
          price: product.price_min != null ? product.price_min : product.price,
          featured_image: product.featured_image,
          variants_count: product.variants ? product.variants.length : product.variants_count || 1,
          first_variant_id: product.first_variant_id || (firstVariant && firstVariant.id),
          source: source
        });
      }

      var hasComplementary = false;
      compResults.forEach(function (result) {
        if (result.products.length) hasComplementary = true;
        result.products.forEach(function (p) {
          pushProduct(p, 'complementary');
        });
      });

      var relatedPromise = hasComplementary
        ? Promise.resolve([])
        : Promise.all(
            seedIds.slice(0, 3).map(function (id) {
              return fetchIntent(id, 'related');
            })
          );

      return relatedPromise.then(function (relatedResults) {
        (relatedResults || []).forEach(function (result) {
          result.products.forEach(function (p) {
            pushProduct(p, 'related');
          });
        });
        (fallback || []).forEach(function (p) {
          pushProduct(p, p.source || 'collection');
        });
        return pool;
      });
    });
  }

  function rankProducts(pool, gap, ceiling, unlocked, afterThreshold) {
    if (!pool.length) return [];
    if (unlocked) {
      if (afterThreshold === 'hide') return [];
      return pool.slice().sort(function (a, b) {
        return a.price - b.price;
      });
    }

    var above = pool
      .filter(function (p) {
        return p.price >= gap && p.price - gap <= ceiling;
      })
      .sort(function (a, b) {
        return a.price - gap - (b.price - gap);
      });

    if (above.length) return above;

    return pool
      .filter(function (p) {
        return p.price < gap;
      })
      .sort(function (a, b) {
        return gap - a.price - (gap - b.price);
      });
  }

  function cartKey(cart) {
    var parts = (cart.items || [])
      .map(function (i) {
        return i.id + 'x' + i.quantity;
      })
      .sort();
    return parts.join('|') + '|' + cart.total_price;
  }

  function renderRecs(root, products, cart) {
    var list = root.querySelector('[data-cart-recs-list]');
    var heading = root.querySelector('[data-cart-recs-heading]');
    if (!list) return;

    var isDrawer = !!document.getElementById('cartSlideoutWrapper');
    var limit = parseInt(
      root.getAttribute(isDrawer ? 'data-limit-drawer' : 'data-limit-page') || '2',
      10
    );
    var shown = products.slice(0, limit);

    if (!shown.length) {
      root.hidden = true;
      list.innerHTML = '';
      return;
    }

    root.hidden = false;
    if (heading) {
      var unlocked =
        qualifyingTotalFromCart(cart) >=
        presentmentCents(
          root.getAttribute('data-threshold-shop-cents'),
          root.getAttribute('data-shop-currency')
        );
      var configuredHeading = root.getAttribute('data-heading') || 'Add one of these';
      heading.textContent = unlocked ? 'You may also like' : configuredHeading;
    }

    list.innerHTML = shown
      .map(function (product, index) {
        var img = product.featured_image
          ? '<img class="cart-cro-recs__image" src="' +
            product.featured_image +
            '" alt="" width="64" height="64" loading="lazy" />'
          : '<span class="cart-cro-recs__image" aria-hidden="true"></span>';
        var priceHtml = escapeHtml(formatMoneyPlain(product.price));
        var multi = Number(product.variants_count) > 1;
        var action = multi
          ? '<a class="btn secondary-button alt-focus cart-cro-recs__action" data-cart-rec-click href="' +
            product.url +
            '">View</a>'
          : '<button type="button" class="btn secondary-button alt-focus cart-cro-recs__action" data-cart-rec-add data-variant-id="' +
            product.first_variant_id +
            '">Add</button>';

        return (
          '<li class="cart-cro-recs__item" data-product-id="' +
          product.id +
          '" data-source="' +
          (product.source || '') +
          '" data-position="' +
          (index + 1) +
          '">' +
          img +
          '<div class="cart-cro-recs__meta">' +
          '<a class="cart-cro-recs__title" data-cart-rec-click href="' +
          product.url +
          '">' +
          escapeHtml(product.title) +
          '</a>' +
          '<div class="cart-cro-recs__price">' +
          priceHtml +
          '</div>' +
          '</div>' +
          action +
          '</li>'
        );
      })
      .join('');

    if (root.__cartCroAdding) {
      setAddButtonsDisabled(root, true);
    }

    shown.forEach(function (product, index) {
      var impressionKey = product.id + ':' + (index + 1) + ':' + cartKey(cart);
      if (!impressedKeys[impressionKey]) {
        impressedKeys[impressionKey] = true;
        publishEvent('cart_recommendation_impression', {
          product_id: product.id,
          variant_id: product.first_variant_id,
          price_cents: product.price,
          position: index + 1,
          source: product.source
        });
      }
    });

    bindRecActions(root);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function bindRecActions(root) {
    root.querySelectorAll('[data-cart-rec-click]').forEach(function (el) {
      el.addEventListener('click', function () {
        var item = el.closest('.cart-cro-recs__item');
        if (!item) return;
        publishEvent('cart_recommendation_click', {
          product_id: Number(item.getAttribute('data-product-id')),
          position: Number(item.getAttribute('data-position')),
          source: item.getAttribute('data-source')
        });
      });
    });

    root.querySelectorAll('[data-cart-rec-add]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = btn.closest('.cart-cro-recs__item');
        var variantId = btn.getAttribute('data-variant-id');
        if (!variantId || root.__cartCroAdding) return;
        root.__cartCroAdding = true;
        setAddButtonsDisabled(root, true);
        setAddButtonState(btn, 'loading');
        publishEvent('cart_recommendation_add_to_cart', {
          product_id: item ? Number(item.getAttribute('data-product-id')) : null,
          variant_id: Number(variantId),
          position: item ? Number(item.getAttribute('data-position')) : null,
          source: item ? item.getAttribute('data-source') : null
        });

        fetch(ROOT + 'cart/add.js', {
          method: 'POST',
          credentials: 'same-origin',
          headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
          body: JSON.stringify({ id: Number(variantId), quantity: 1 })
        })
          .then(function (res) {
            return res.json().then(function (json) {
              return { ok: res.ok, json: json };
            });
          })
          .then(function (result) {
            if (!result.ok) {
              console.error('Cart CRO add failed', result.json);
              resetAdd();
              return;
            }
            return fetch(ROOT + 'cart.js', {
              credentials: 'same-origin',
              headers: { 'X-Requested-With': 'XMLHttpRequest' }
            })
              .then(function (r) {
                return r.json();
              })
              .then(function (cart) {
                root.__cartCroAdding = false;
                setAddButtonState(btn, 'added');
                if (window.wetheme && typeof window.wetheme.updateCartDrawer === 'function') {
                  window.wetheme.updateCartDrawer(cart);
                }
                var wrapper = document.querySelector('#cartSlideoutWrapper');
                if (wrapper) {
                  wrapper.dispatchEvent(new CustomEvent('cart:open'));
                }
                onCartUpdated(cart);
              });
          })
          .catch(function (err) {
            console.error(err);
            resetAdd();
          });

        function resetAdd() {
          root.__cartCroAdding = false;
          setAddButtonState(btn, 'idle');
          setAddButtonsDisabled(root, false);
        }
      });
    });
  }

  function setAddButtonsDisabled(root, disabled) {
    root.querySelectorAll('[data-cart-rec-add]').forEach(function (el) {
      el.disabled = disabled;
    });
  }

  var ADD_LABELS = { idle: 'Add', loading: 'Adding', added: 'Added' };

  function setAddButtonState(btn, state) {
    if (state === 'idle') {
      btn.style.width = '';
    } else if (!btn.style.width) {
      btn.style.width = btn.offsetWidth + 'px';
    }
    btn.classList.toggle('is-loading', state === 'loading');
    btn.classList.toggle('is-added', state === 'added');
    btn.setAttribute('aria-busy', state === 'loading' ? 'true' : 'false');
    btn.textContent = ADD_LABELS[state];
  }

  function refreshRecommendations(cart) {
    var roots = document.querySelectorAll('[data-cart-recommendations]');
    if (!roots.length || !cart || !cart.item_count) {
      roots.forEach(function (root) {
        root.hidden = true;
      });
      return;
    }

    var key = cartKey(cart);
    lastCartKey = key;

    roots.forEach(function (root) {
      var shopCurrency = root.getAttribute('data-shop-currency');
      var threshold = presentmentCents(
        root.getAttribute('data-threshold-shop-cents'),
        shopCurrency
      );
      var ceiling = presentmentCents(root.getAttribute('data-ceiling-shop-cents'), shopCurrency);
      var afterThreshold = root.getAttribute('data-after-threshold') || 'show_low_priced';
      var qualifying = qualifyingTotalFromCart(cart);
      var unlocked = qualifying >= threshold;
      var gap = Math.max(0, threshold - qualifying);
      var cacheKey = key + '|' + gap + '|' + unlocked;

      if (recsCache[cacheKey]) {
        renderRecs(root, recsCache[cacheKey], cart);
        return;
      }

      var fallback = parseFallback(root);
      mergePool(cart, fallback).then(function (pool) {
        if (cartKey(cart) !== lastCartKey && cartKey(cart) !== key) {
          /* newer cart arrived; ignore stale */
        }
        var ranked = rankProducts(pool, gap, ceiling, unlocked, afterThreshold);
        recsCache[cacheKey] = ranked;
        renderRecs(root, ranked, cart);
      });
    });
  }

  function onCartUpdated(cart) {
    if (!cart) return;
    lastCart = cart;
    updateShippingFromCart(cart);
    /* Defer recs so drawer open is not blocked */
    window.setTimeout(function () {
      refreshRecommendations(cart);
    }, 0);
  }

  function patchFetch() {
    if (fetchPatched || typeof window.fetch !== 'function') return;
    fetchPatched = true;
    var original = window.fetch;
    window.fetch = function () {
      var args = arguments;
      var input = args[0];
      var url = typeof input === 'string' ? input : input && input.url ? input.url : '';
      return original.apply(this, args).then(function (response) {
        try {
          if (
            response &&
            response.ok &&
            url &&
            (url.indexOf('/cart.js') !== -1 ||
              url.indexOf('/cart/update.js') !== -1 ||
              url.indexOf('/cart/change.js') !== -1)
          ) {
            response
              .clone()
              .json()
              .then(function (data) {
                if (data && typeof data.item_count !== 'undefined' && data.items) {
                  onCartUpdated(data);
                }
              })
              .catch(function () {});
          }
        } catch (e) {
          /* no-op */
        }
        return response;
      });
    };
  }

  function wrapUpdateCartDrawer() {
    if (!window.wetheme || typeof window.wetheme.updateCartDrawer !== 'function') return false;
    if (window.wetheme.__cartCroWrapped) return true;

    var original = window.wetheme.updateCartDrawer.bind(window.wetheme);
    window.wetheme.updateCartDrawer = function (cart) {
      if (cart) {
        onCartUpdated(cart);
        document.dispatchEvent(new CustomEvent('cart:updated', { detail: cart }));
      }
      return original(cart);
    };
    window.wetheme.__cartCroWrapped = true;
    return true;
  }

  function observeShippingSection() {
    var containers = document.querySelectorAll('[data-free-shipping-msg]');
    containers.forEach(function (container) {
      if (container.__cartCroObserved) return;
      container.__cartCroObserved = true;
      var observer = new MutationObserver(function () {
        if (lastCart) {
          updateShippingFromCart(lastCart);
        }
      });
      observer.observe(container, { childList: true });
    });
  }

  function trackPdpTeaser() {
    var teaser = document.querySelector('[data-cart-cro-pdp-teaser]');
    if (!teaser || teaser.__tracked) return;
    teaser.__tracked = true;
    publishEvent('free_shipping_pdp_teaser_viewed', {
      threshold: teaser.textContent.trim().slice(0, 120)
    });
  }

  function enableStickyCheckout() {
    var wrapper = document.getElementById('cartSlideoutWrapper');
    if (!wrapper) return;
    if (document.querySelector('[data-cart-cro-shipping], [data-cart-recommendations]')) {
      wrapper.classList.add('cart-cro--sticky-checkout');
    }
  }

  function init() {
    patchFetch();
    observeShippingSection();
    enableStickyCheckout();
    trackPdpTeaser();

    var attempts = 0;
    var timer = window.setInterval(function () {
      if (wrapUpdateCartDrawer() || ++attempts > 80) {
        window.clearInterval(timer);
      }
    }, 50);

    /* Initial cart from drawer/page JSON */
    var initial = document.getElementById('initial-cart');
    if (initial) {
      try {
        onCartUpdated(JSON.parse(initial.textContent));
      } catch (e) {
        /* no-op */
      }
    }

    document.addEventListener('cart:updated', function (event) {
      if (event.detail) onCartUpdated(event.detail);
    });

    var drawer = document.querySelector('#cartSlideoutWrapper');
    if (drawer) {
      drawer.addEventListener('cart:open', function () {
        progressViewedThisOpen = false;
        forceProgressView = true;
        if (lastCart) {
          updateShippingFromCart(lastCart);
        }
        forceProgressView = false;
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
