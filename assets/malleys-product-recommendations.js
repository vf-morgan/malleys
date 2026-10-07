/**
 * PDP "You may also like" shelf.
 * Loads recommendation section HTML below the fold and sends adds through the theme cart drawer.
 */
(function () {
  'use strict';

  if (window.__malleysPdpRecsInit) return;
  window.__malleysPdpRecsInit = true;

  var impressed = {};

  function translations() {
    var node = document.getElementById('wetheme-global');
    if (!node) return {};
    try {
      var data = JSON.parse(node.textContent || '{}');
      return data.translations || {};
    } catch (e) {
      return {};
    }
  }

  function publish(name, payload) {
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

  function cardPayload(root, card, variantId) {
    var price = card.getAttribute('data-price-cents');
    var resolvedVariant = variantId || card.getAttribute('data-variant-id');
    var seed = root.getAttribute('data-seed-product-id');
    return {
      section: root.getAttribute('data-section') || 'pdp_you_may_also_like',
      intent: card.getAttribute('data-intent') || root.getAttribute('data-intent') || 'related',
      source: card.getAttribute('data-source') || '',
      product_id: Number(card.getAttribute('data-product-id')),
      variant_id: resolvedVariant ? Number(resolvedVariant) : null,
      price_cents: price ? Number(price) : null,
      position: Number(card.getAttribute('data-position')),
      seed_product_id: seed ? Number(seed) : null
    };
  }

  function hide(root) {
    var slot = root.querySelector('[data-malleys-pdp-recs-slot]');
    if (slot) {
      slot.classList.remove('malleys-pdp-recs--loading');
      slot.removeAttribute('aria-busy');
    }
    root.hidden = true;
    var wrapper = root.closest('.shopify-section');
    if (wrapper) wrapper.hidden = true;
  }

  function trackImpressions(root) {
    var slot = root.querySelector('[data-malleys-pdp-recs-slot]');
    if (!slot) return;
    slot.querySelectorAll('[data-pdp-rec-card]').forEach(function (card) {
      var payload = cardPayload(root, card);
      var key = [payload.section, payload.seed_product_id, payload.product_id, payload.position].join(':');
      if (impressed[key]) return;
      impressed[key] = true;
      publish('pdp_recommendation_impression', payload);
    });
  }

  function bindInteractions(root) {
    var slot = root.querySelector('[data-malleys-pdp-recs-slot]');
    if (!slot || slot.__malleysPdpRecsBound) return;
    slot.__malleysPdpRecsBound = true;

    slot.addEventListener('click', function (event) {
      var link = event.target.closest('a');
      if (!link || !slot.contains(link)) return;
      var card = link.closest('[data-pdp-rec-card]');
      if (!card) return;
      publish('pdp_recommendation_click', cardPayload(root, card));
    });

    slot.addEventListener('submit', function (event) {
      var form = event.target;
      if (!form.closest('.quick-add-wrapper.is-singular')) return;

      var page = document.getElementById('PageContainer');
      var cartType = page ? page.getAttribute('data-cart-type') : '';
      var cartAction = page ? page.getAttribute('data-cart-action') : '';
      if (cartType === 'page' && cartAction !== 'added') return;

      event.preventDefault();
      if (root.__malleysPdpRecsAdding) return;

      var card = form.closest('[data-pdp-rec-card]');
      var button = form.querySelector('.quick-add-button');
      if (!card || !button) return;

      var variantInput = form.querySelector('[name="id"]');
      var variantId = variantInput ? variantInput.value : card.getAttribute('data-variant-id');
      root.__malleysPdpRecsAdding = true;
      setButtonsDisabled(slot, true);
      setButtonLoading(button);

      publish('pdp_recommendation_add_to_cart', cardPayload(root, card, variantId));

      var rootUrl = (window.Shopify && window.Shopify.routes && window.Shopify.routes.root) || '/';

      fetch(rootUrl + 'cart/add.js', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        body: new FormData(form)
      })
        .then(function (res) {
          return res.json().then(function (json) {
            return { ok: res.ok, json: json };
          });
        })
        .then(function (result) {
          if (!result.ok) {
            showError(button, (result.json && (result.json.description || result.json.message)) || 'Unable to add to cart');
            resetButton(button);
            return;
          }
          return fetch(rootUrl + 'cart.js', {
            credentials: 'same-origin',
            headers: { 'X-Requested-With': 'XMLHttpRequest' }
          })
            .then(function (res) {
              return res.json();
            })
            .then(function (cart) {
              try {
                openCart(cart, cartType, cartAction);
              } catch (e) {
                console.error(e);
              }
              resetButton(button, true);
            });
        })
        .catch(function () {
          showError(button, 'Unable to add to cart');
          resetButton(button);
        });

      function resetButton(btn, added) {
        root.__malleysPdpRecsAdding = false;
        setButtonsDisabled(slot, false);
        var copy = translations();
        btn.classList.remove('disabled');
        btn.disabled = false;
        btn.removeAttribute('aria-busy');
        btn.innerHTML = added && copy.added ? copy.added : copy.addToCart || 'Add to cart';
        if (added && copy.added) {
          window.setTimeout(function () {
            if (!root.__malleysPdpRecsAdding) btn.innerHTML = copy.addToCart || 'Add to cart';
          }, 2000);
        }
      }
    });
  }

  function setButtonsDisabled(slot, disabled) {
    slot.querySelectorAll('.quick-add-button').forEach(function (button) {
      button.disabled = disabled;
      button.classList.toggle('disabled', disabled);
    });
  }

  function setButtonLoading(button) {
    var copy = translations();
    button.disabled = true;
    button.classList.add('disabled');
    button.setAttribute('aria-busy', 'true');
    button.innerHTML =
      '<i class="fa fa-circle-o-notch fa-spin fa-fw js"></i><span class="sr-only">' +
      (copy.loading || 'Loading') +
      '</span>';
  }

  function showError(button, text) {
    var existing = button.parentNode.querySelector('.malleys-pdp-recs__error');
    if (existing) existing.remove();
    var error = document.createElement('div');
    error.className = 'alert alert-danger malleys-pdp-recs__error';
    error.textContent = text;
    button.parentNode.insertBefore(error, button.nextSibling);
  }

  function openCart(cart, cartType, cartAction) {
    if (window.wetheme && typeof window.wetheme.updateCartDrawer === 'function') {
      window.wetheme.updateCartDrawer(cart);
    }

    if (cartAction === 'cart' && cartType === 'page') {
      var cartLink = document.getElementById('cart-link');
      if (cartLink && cartLink.value) window.location.href = cartLink.value;
      return;
    }

    if (cartAction === 'added') return;

    var wrapper = document.getElementById('cartSlideoutWrapper');
    if (!wrapper) return;
    var status = document.querySelector('.js-cart-drawer-status');
    var top = document.querySelector('.cart-drawer__top');
    if (status) status.textContent = 'Item added to your cart';
    if (status && top && status.parentNode !== top) top.appendChild(status);
    wrapper.dispatchEvent(new CustomEvent('cart:open'));
  }

  function reveal(root, html) {
    var slot = root.querySelector('[data-malleys-pdp-recs-slot]');
    if (!slot) return;
    var parsed = document.createElement('div');
    parsed.innerHTML = html;
    var next = parsed.querySelector('[data-malleys-pdp-recs-slot]');
    if (!next || next.hasAttribute('data-empty') || !next.querySelector('[data-pdp-rec-card]')) {
      hide(root);
      return;
    }
    slot.innerHTML = next.innerHTML;
    slot.classList.remove('malleys-pdp-recs--loading');
    slot.removeAttribute('aria-busy');
    if (window.lazySizes && window.lazySizes.loader && typeof window.lazySizes.loader.checkElems === 'function') {
      window.lazySizes.loader.checkElems();
    }
    if (window.wetheme && window.wetheme.wow && typeof window.wetheme.wow.sync === 'function') {
      window.wetheme.wow.sync();
    }
    bindInteractions(root);
    trackImpressions(root);
  }

  function load(root) {
    var slot = root.querySelector('[data-malleys-pdp-recs-slot]');
    var url = root.getAttribute('data-url');
    if (!slot || !url) {
      hide(root);
      return;
    }

    if (slot.querySelector('[data-pdp-rec-card]')) {
      slot.classList.remove('malleys-pdp-recs--loading');
      slot.removeAttribute('aria-busy');
      bindInteractions(root);
      trackImpressions(root);
      return;
    }

    if (slot.hasAttribute('data-empty')) {
      hide(root);
      return;
    }

    fetch(url, { credentials: 'same-origin' })
      .then(function (res) {
        if (!res.ok) throw new Error('recommendations unavailable');
        return res.text();
      })
      .then(function (html) {
        reveal(root, html);
      })
      .catch(function () {
        hide(root);
      });
  }

  function initRoot(root) {
    if (!root || root.__malleysPdpRecsInit) return;
    root.__malleysPdpRecsInit = true;

    var start = function () {
      load(root);
    };

    if (!('IntersectionObserver' in window)) {
      start();
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        if (!entries[0] || !entries[0].isIntersecting) return;
        observer.disconnect();
        start();
      },
      { rootMargin: '200px 0px' }
    );
    observer.observe(root);
  }

  function boot() {
    document.querySelectorAll('[data-malleys-pdp-recs]').forEach(initRoot);
  }

  document.addEventListener('shopify:section:load', function (event) {
    if (!event.target || !event.target.querySelector) return;
    var root = event.target.querySelector('[data-malleys-pdp-recs]');
    if (root) initRoot(root);
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
