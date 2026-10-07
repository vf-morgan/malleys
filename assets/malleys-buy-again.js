/**
 * "Buy it again" reorder controls for the homepage and legacy account pages.
 * Adds exact past-order variants through the theme cart drawer and reports PII-free analytics.
 */
(function () {
  'use strict';

  if (window.__malleysBuyAgainInit) return;
  window.__malleysBuyAgainInit = true;

  var rootUrl = (window.Shopify && window.Shopify.routes && window.Shopify.routes.root) || '/';

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

  function readPayload(root) {
    var node = root.querySelector('[data-buy-again-payload]');
    if (!node) return { items: [], unavailable: [] };
    try {
      var data = JSON.parse(node.textContent || '{}');
      return { items: data.items || [], unavailable: data.unavailable || [] };
    } catch (e) {
      return { items: [], unavailable: [] };
    }
  }

  function cartSettings() {
    var page = document.getElementById('PageContainer');
    return {
      type: page ? page.getAttribute('data-cart-type') : '',
      action: page ? page.getAttribute('data-cart-action') : ''
    };
  }

  function cardPayload(root, card, variantId) {
    var price = card.getAttribute('data-price-cents');
    var resolvedVariant = variantId || card.getAttribute('data-variant-id');
    return {
      placement: root.getAttribute('data-placement') || 'homepage',
      source: card.getAttribute('data-source') || 'past_order',
      product_id: Number(card.getAttribute('data-product-id')),
      variant_id: resolvedVariant ? Number(resolvedVariant) : null,
      price_cents: price ? Number(price) : null,
      position: Number(card.getAttribute('data-position'))
    };
  }

  function plural(count, one, many) {
    return count === 1 ? one : many;
  }

  function listNames(names) {
    return names.filter(Boolean).join(', ');
  }

  function getCart() {
    return fetch(rootUrl + 'cart.js', {
      credentials: 'same-origin',
      headers: { 'X-Requested-With': 'XMLHttpRequest' }
    }).then(function (res) {
      if (!res.ok) throw new Error('cart unavailable');
      return res.json();
    });
  }

  function postAdd(body, isForm) {
    var headers = { 'X-Requested-With': 'XMLHttpRequest' };
    if (!isForm) headers['Content-Type'] = 'application/json';
    return fetch(rootUrl + 'cart/add.js', {
      method: 'POST',
      credentials: 'same-origin',
      headers: headers,
      body: isForm ? body : JSON.stringify(body)
    }).then(function (res) {
      return res
        .json()
        .catch(function () {
          return {};
        })
        .then(function (json) {
          return { ok: res.ok, json: json };
        });
    });
  }

  function errorText(json) {
    return (json && (json.description || json.message)) || 'Unable to add to cart';
  }

  function openCart(cart, message) {
    var settings = cartSettings();

    if (window.wetheme && typeof window.wetheme.updateCartDrawer === 'function') {
      window.wetheme.updateCartDrawer(cart);
    }

    if (settings.action === 'cart' && settings.type === 'page') {
      var cartLink = document.getElementById('cart-link');
      if (cartLink && cartLink.value) window.location.href = cartLink.value;
      return;
    }

    if (settings.action === 'added') return;

    var wrapper = document.getElementById('cartSlideoutWrapper');
    if (!wrapper) return;
    var status = document.querySelector('.js-cart-drawer-status');
    var top = document.querySelector('.cart-drawer__top');
    if (status) status.textContent = message || 'Item added to your cart';
    if (status && top && status.parentNode !== top) top.appendChild(status);
    wrapper.dispatchEvent(new CustomEvent('cart:open'));
  }

  function setStatus(root, text) {
    var status = root.querySelector('[data-buy-again-status]');
    if (status) status.textContent = text || '';
  }

  function clearErrors(root) {
    root.querySelectorAll('.malleys-buy-again__error').forEach(function (node) {
      node.remove();
    });
  }

  function showError(button, text) {
    var existing = button.parentNode.querySelector('.malleys-buy-again__error');
    if (existing) existing.remove();
    var error = document.createElement('div');
    error.className = 'alert alert-danger malleys-buy-again__error';
    error.setAttribute('role', 'alert');
    error.textContent = text;
    button.parentNode.insertBefore(error, button.nextSibling);
  }

  function setButtonsDisabled(root, disabled) {
    root.querySelectorAll('[data-buy-again-add], [data-buy-again-all], [data-buy-again-new-slot] .quick-add-button').forEach(function (button) {
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

  function restoreButton(root, button, resultLabel) {
    var copy = translations();
    var label = button.getAttribute('data-label') || copy.addToCart || 'Add to cart';
    root.__malleysBuyAgainBusy = false;
    setButtonsDisabled(root, false);
    button.removeAttribute('aria-busy');
    button.textContent = resultLabel || label;
    if (resultLabel) {
      window.setTimeout(function () {
        if (!root.__malleysBuyAgainBusy) button.textContent = label;
      }, 2000);
    }
  }

  function addedMessage(root, addedCount, skippedNames, failedNames, unavailableNames) {
    var date = root.getAttribute('data-order-date') || '';
    var parts = [];
    if (addedCount > 0) {
      parts.push(
        'Added ' + addedCount + ' ' + plural(addedCount, 'item', 'items') + (date ? ' from your ' + date + ' order.' : '.')
      );
    }
    if (skippedNames.length) {
      parts.push(
        skippedNames.length + ' ' + plural(skippedNames.length, 'was', 'were') + ' already in your cart: ' + listNames(skippedNames) + '.'
      );
    }
    if (failedNames.length) {
      parts.push(
        failedNames.length + " couldn't be added: " + listNames(failedNames) + '.'
      );
    }
    if (unavailableNames.length) {
      parts.push(
        unavailableNames.length + ' ' + plural(unavailableNames.length, 'is', 'are') + ' no longer available: ' + listNames(unavailableNames) + '.'
      );
    }
    return parts.join(' ');
  }

  function addOne(root, card, button) {
    if (root.__malleysBuyAgainBusy) return;
    root.__malleysBuyAgainBusy = true;
    clearErrors(root);
    setButtonsDisabled(root, true);
    setButtonLoading(button);

    var payload = cardPayload(root, card);
    var quantity = Number(card.getAttribute('data-quantity')) || 1;
    publish('buy_again_add_to_cart', Object.assign({ quantity: quantity }, payload));

    postAdd({ items: [{ id: payload.variant_id, quantity: quantity }] })
      .then(function (result) {
        if (!result.ok) {
          showError(button, errorText(result.json));
          restoreButton(root, button);
          return;
        }
        return getCart().then(function (cart) {
          var message = 'Added ' + quantity + ' ' + plural(quantity, 'item', 'items') + ' to your cart';
          try {
            openCart(cart, message);
          } catch (e) {
            console.error(e);
          }
          setStatus(root, message + '.');
          restoreButton(root, button, translations().added || 'Added');
        });
      })
      .catch(function () {
        showError(button, 'Unable to add to cart');
        restoreButton(root, button);
      });
  }

  function addIndividually(items) {
    var added = [];
    var failed = [];
    return items
      .reduce(function (chain, item) {
        return chain.then(function () {
          return postAdd({ items: [{ id: item.variant_id, quantity: item.quantity }] })
            .then(function (result) {
              if (result.ok) added.push(item);
              else failed.push(item);
            })
            .catch(function () {
              failed.push(item);
            });
        });
      }, Promise.resolve())
      .then(function () {
        return { added: added, failed: failed };
      });
  }

  function addAll(root, button) {
    if (root.__malleysBuyAgainBusy) return;
    var data = readPayload(root);
    if (!data.items.length) return;

    root.__malleysBuyAgainBusy = true;
    clearErrors(root);
    setStatus(root, '');
    setButtonsDisabled(root, true);
    setButtonLoading(button);

    var skipped = [];

    getCart()
      .catch(function () {
        return { items: [] };
      })
      .then(function (cart) {
        var inCart = {};
        (cart.items || []).forEach(function (line) {
          inCart[line.variant_id] = true;
        });
        var toAdd = data.items.filter(function (item) {
          if (inCart[item.variant_id]) {
            skipped.push(item);
            return false;
          }
          return true;
        });

        if (!toAdd.length) return { added: [], failed: [] };

        return postAdd({
          items: toAdd.map(function (item) {
            return { id: item.variant_id, quantity: item.quantity };
          })
        }).then(function (result) {
          if (result.ok) return { added: toAdd, failed: [] };
          return addIndividually(toAdd);
        });
      })
      .then(function (outcome) {
        var addedCount = outcome.added.reduce(function (sum, item) {
          return sum + item.quantity;
        }, 0);
        var addedValue = outcome.added.reduce(function (sum, item) {
          return sum + item.quantity * item.price_cents;
        }, 0);
        var names = function (items) {
          return items.map(function (item) {
            return item.title;
          });
        };
        var message = addedMessage(root, addedCount, names(skipped), names(outcome.failed), data.unavailable);

        publish('buy_again_reorder_all', {
          placement: root.getAttribute('data-placement') || 'homepage',
          source: 'past_order',
          item_count: addedCount,
          value_cents: addedValue,
          requested_count: data.items.length,
          added_count: outcome.added.length,
          skipped_count: skipped.length,
          failed_count: outcome.failed.length
        });

        if (!outcome.added.length && !skipped.length) {
          showError(button, message || 'Unable to add these items to your cart');
          restoreButton(root, button);
          return;
        }

        var resultLabel;
        if (!outcome.added.length) {
          message = 'Everything available from this order is already in your cart.';
          resultLabel = 'Already in cart';
        } else if (outcome.failed.length || skipped.length) {
          resultLabel = 'Added ' + outcome.added.length + ' of ' + data.items.length;
        } else {
          resultLabel = translations().added || 'Added';
        }

        return getCart().then(function (cart) {
          try {
            openCart(cart, message);
          } catch (e) {
            console.error(e);
          }
          setStatus(root, message);
          restoreButton(root, button, resultLabel);
        });
      })
      .catch(function () {
        showError(button, 'Unable to add these items to your cart');
        restoreButton(root, button);
      });
  }

  function orderSummary(root) {
    var data = readPayload(root);
    var itemCount = Number(root.getAttribute('data-item-count'));
    var valueCents = Number(root.getAttribute('data-value-cents'));
    if (!itemCount) {
      itemCount = data.items.reduce(function (sum, item) {
        return sum + (Number(item.quantity) || 0);
      }, 0);
    }
    if (!valueCents) {
      valueCents = data.items.reduce(function (sum, item) {
        return sum + (Number(item.quantity) || 0) * (Number(item.price_cents) || 0);
      }, 0);
    }
    return { itemCount: itemCount, valueCents: valueCents };
  }

  function trackImpression(root) {
    var publishImpression = function () {
      if (root.__malleysBuyAgainImpressed) return;
      root.__malleysBuyAgainImpressed = true;
      var summary = orderSummary(root);
      publish('buy_again_impression', {
        placement: root.getAttribute('data-placement') || 'homepage',
        source: 'past_order',
        item_count: summary.itemCount,
        value_cents: summary.valueCents,
        card_count: root.querySelectorAll('[data-buy-again-card]').length
      });
    };

    if (!('IntersectionObserver' in window)) {
      publishImpression();
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        if (!entries[0] || !entries[0].isIntersecting) return;
        observer.disconnect();
        publishImpression();
      },
      { threshold: 0.25 }
    );
    observer.observe(root);
  }

  function removeNewSlot(slot) {
    if (slot && slot.parentNode) slot.parentNode.removeChild(slot);
  }

  function loadNewSlot(root) {
    var slot = root.querySelector('[data-buy-again-new-slot]');
    var url = root.getAttribute('data-new-url');
    if (!slot) return;
    if (!url) {
      removeNewSlot(slot);
      return;
    }

    var orderIds = root.getAttribute('data-order-product-ids') || '|';

    fetch(url, { credentials: 'same-origin' })
      .then(function (res) {
        if (!res.ok) throw new Error('recommendations unavailable');
        return res.text();
      })
      .then(function (html) {
        var parsed = document.createElement('div');
        parsed.innerHTML = html;
        var candidates = parsed.querySelectorAll('[data-buy-again-new-candidates] [data-pdp-rec-card]');
        var chosen = null;
        for (var i = 0; i < candidates.length; i++) {
          var id = candidates[i].getAttribute('data-product-id');
          if (orderIds.indexOf('|' + id + '|') === -1) {
            chosen = candidates[i];
            break;
          }
        }
        if (!chosen) {
          removeNewSlot(slot);
          return;
        }

        var position = root.querySelectorAll('[data-buy-again-card]').length + 1;
        slot.setAttribute('data-buy-again-card', '');
        slot.setAttribute('data-product-id', chosen.getAttribute('data-product-id') || '');
        slot.setAttribute('data-variant-id', chosen.getAttribute('data-variant-id') || '');
        slot.setAttribute('data-price-cents', chosen.getAttribute('data-price-cents') || '');
        slot.setAttribute('data-position', String(position));
        slot.setAttribute('data-source', chosen.getAttribute('data-source') || 'something_new');

        var label = document.createElement('p');
        label.className = 'note malleys-buy-again__new-label';
        label.textContent = 'Something new to try';

        slot.innerHTML = '';
        slot.appendChild(label);
        while (chosen.firstChild) slot.appendChild(chosen.firstChild);
        slot.classList.remove('malleys-buy-again__new--loading');
        slot.removeAttribute('aria-busy');

        if (window.lazySizes && window.lazySizes.loader && typeof window.lazySizes.loader.checkElems === 'function') {
          window.lazySizes.loader.checkElems();
        }

        publish('buy_again_impression', Object.assign(cardPayload(root, slot), { item_count: 1 }));
      })
      .catch(function () {
        removeNewSlot(slot);
      });
  }

  function bindNewSlotSubmit(root) {
    root.addEventListener('submit', function (event) {
      var form = event.target;
      var slot = form.closest('[data-buy-again-new-slot]');
      if (!slot || !form.closest('.quick-add-wrapper.is-singular')) return;

      var settings = cartSettings();
      if (settings.type === 'page' && settings.action !== 'added') return;

      event.preventDefault();
      if (root.__malleysBuyAgainBusy) return;

      var button = form.querySelector('.quick-add-button');
      if (!button) return;
      if (!button.getAttribute('data-label')) {
        button.setAttribute('data-label', translations().addToCart || button.textContent.trim());
      }

      var variantInput = form.querySelector('[name="id"]');
      var variantId = variantInput ? variantInput.value : slot.getAttribute('data-variant-id');

      root.__malleysBuyAgainBusy = true;
      clearErrors(root);
      setButtonsDisabled(root, true);
      setButtonLoading(button);
      publish('buy_again_add_to_cart', Object.assign({ quantity: 1 }, cardPayload(root, slot, variantId)));

      postAdd(new FormData(form), true)
        .then(function (result) {
          if (!result.ok) {
            showError(button, errorText(result.json));
            restoreButton(root, button);
            return;
          }
          return getCart().then(function (cart) {
            try {
              openCart(cart);
            } catch (e) {
              console.error(e);
            }
            restoreButton(root, button, translations().added || 'Added');
          });
        })
        .catch(function () {
          showError(button, 'Unable to add to cart');
          restoreButton(root, button);
        });
    });
  }

  function initRoot(root) {
    if (!root || root.__malleysBuyAgainInit) return;
    root.__malleysBuyAgainInit = true;

    root.addEventListener('click', function (event) {
      var addButton = event.target.closest('[data-buy-again-add]');
      if (addButton && root.contains(addButton)) {
        var card = addButton.closest('[data-buy-again-card]');
        if (card) addOne(root, card, addButton);
        return;
      }

      var allButton = event.target.closest('[data-buy-again-all]');
      if (allButton && root.contains(allButton)) {
        addAll(root, allButton);
        return;
      }

      var link = event.target.closest('a');
      if (!link || !root.contains(link)) return;
      var linkCard = link.closest('[data-buy-again-card]');
      if (!linkCard) return;
      publish('buy_again_click', cardPayload(root, linkCard));
    });

    bindNewSlotSubmit(root);
    trackImpression(root);
    loadNewSlot(root);
  }

  function boot() {
    document.querySelectorAll('[data-malleys-buy-again]').forEach(initRoot);
  }

  document.addEventListener('shopify:section:load', function (event) {
    if (!event.target || !event.target.querySelector) return;
    var root = event.target.querySelector('[data-malleys-buy-again]');
    if (root) initRoot(root);
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
