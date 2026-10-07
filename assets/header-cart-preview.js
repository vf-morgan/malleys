/* Keeps the cart count badge and hover preview in sync after add-to-cart. */
(function () {
  var lastCount = null;

  function formatMoney(cents, format) {
    var template = format || '${{amount}}';
    var placeholder = /\{\{\s*(\w+)\s*\}\}/;
    var match = String(template).match(placeholder);
    var token = match ? match[1] : 'amount';

    function withDelimiters(number, precision, thousands, decimal) {
      thousands = thousands || ',';
      decimal = decimal || '.';
      if (isNaN(number) || number == null) return '0';
      var fixed = (Number(number) / 100).toFixed(precision);
      var parts = fixed.split('.');
      var dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
      var centsPart = parts[1] ? decimal + parts[1] : '';
      return dollars + centsPart;
    }

    var value;
    switch (token) {
      case 'amount_no_decimals':
        value = withDelimiters(cents, 0);
        break;
      case 'amount_with_comma_separator':
        value = withDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = withDelimiters(cents, 0, '.', ',');
        break;
      case 'amount_with_apostrophe_separator':
        value = withDelimiters(cents, 2, "'", '.');
        break;
      case 'amount_no_decimals_with_space_separator':
        value = withDelimiters(cents, 0, ' ');
        break;
      case 'amount_with_space_separator':
        value = withDelimiters(cents, 2, ' ', ',');
        break;
      default:
        value = withDelimiters(cents, 2);
    }

    return String(template).replace(placeholder, value);
  }

  function buildItem(item, format) {
    var li = document.createElement('li');
    li.className = 'header-cart-popup__item';

    var link = document.createElement('a');
    link.className = 'header-cart-popup__link';
    link.href = item.url || '#';

    var imageUrl = item.image || (item.featured_image && item.featured_image.url);
    if (imageUrl) {
      var img = document.createElement('img');
      img.className = 'header-cart-popup__image';
      img.src = imageUrl;
      img.alt = '';
      img.width = 52;
      img.height = 52;
      img.loading = 'lazy';
      link.appendChild(img);
    } else {
      var placeholder = document.createElement('span');
      placeholder.className = 'header-cart-popup__image header-cart-popup__image--empty';
      link.appendChild(placeholder);
    }

    var details = document.createElement('span');
    details.className = 'header-cart-popup__details';

    var name = document.createElement('span');
    name.className = 'header-cart-popup__name';
    name.textContent = item.product_title || item.title || '';
    details.appendChild(name);

    if (item.variant_title && item.variant_title !== 'Default Title') {
      var variant = document.createElement('span');
      variant.className = 'header-cart-popup__variant';
      variant.textContent = item.variant_title;
      details.appendChild(variant);
    }

    var qty = document.createElement('span');
    qty.className = 'header-cart-popup__qty';
    qty.textContent = String(item.quantity || 0) + ' \u00d7 ' + formatMoney(item.final_price || item.price, format);
    details.appendChild(qty);
    link.appendChild(details);
    li.appendChild(link);

    var line = document.createElement('span');
    line.className = 'header-cart-popup__line';
    if (item.original_line_price > item.final_line_price) {
      var compare = document.createElement('s');
      compare.className = 'header-cart-popup__compare';
      compare.textContent = formatMoney(item.original_line_price, format);
      line.appendChild(compare);
    }
    var linePrice = document.createElement('span');
    linePrice.className = 'header-cart-popup__line-price';
    linePrice.textContent = formatMoney(item.final_line_price != null ? item.final_line_price : item.line_price, format);
    line.appendChild(linePrice);
    li.appendChild(line);
    return li;
  }

  function fillPopup(popup, cart) {
    var empty = popup.querySelector('.header-cart-popup__empty');
    var list = popup.querySelector('.header-cart-popup__items');
    var footer = popup.querySelector('.header-cart-popup__footer');
    var amount = popup.querySelector('.header-cart-popup__amount');
    var format = popup.getAttribute('data-money-format');
    var hasItems = cart.item_count > 0;

    if (empty) empty.hidden = hasItems;
    if (list) {
      list.hidden = !hasItems;
      while (list.firstChild) list.removeChild(list.firstChild);
      (cart.items || []).forEach(function (item) {
        list.appendChild(buildItem(item, format));
      });
    }
    if (footer) footer.hidden = !hasItems;
    if (amount) amount.textContent = formatMoney(cart.total_price, format);
  }

  function syncCounts(cart) {
    var count = Number(cart.item_count) || 0;
    var changed = lastCount !== null && lastCount !== count;
    lastCount = count;

    document.querySelectorAll('.header-cart-count').forEach(function (el) {
      el.textContent = String(count);
      el.hidden = count === 0;
      if (changed && count > 0) {
        el.classList.remove('is-updated');
        void el.offsetWidth;
        el.classList.add('is-updated');
      }
    });

    document.querySelectorAll('.cart-item-count-header--quantity').forEach(function (el) {
      if (!el.classList.contains('header-cart-count')) {
        el.textContent = String(count);
      }
    });

    document.querySelectorAll('[data-header-cart-label]').forEach(function (el) {
      var base = el.getAttribute('data-header-cart-label') || 'Cart';
      el.setAttribute('aria-label', count > 0 ? base + ', ' + count : base);
    });
  }

  function onCart(cart) {
    if (!cart || typeof cart.item_count === 'undefined' || !cart.items) return;
    syncCounts(cart);
    document.querySelectorAll('[data-header-cart-popup]').forEach(function (popup) {
      fillPopup(popup, cart);
    });
  }

  document.addEventListener('cart:updated', function (event) {
    if (event.detail) onCart(event.detail);
  });

  function ensureHook() {
    if (!window.wetheme || typeof window.wetheme.updateCartDrawer !== 'function') return false;
    if (window.wetheme.__cartCroWrapped || window.wetheme.__headerCartPreviewWrapped) return true;
    var original = window.wetheme.updateCartDrawer.bind(window.wetheme);
    window.wetheme.updateCartDrawer = function (cart) {
      if (cart) {
        document.dispatchEvent(new CustomEvent('cart:updated', { detail: cart }));
      }
      return original(cart);
    };
    window.wetheme.__headerCartPreviewWrapped = true;
    return true;
  }

  if (typeof window.fetch === 'function' && !window.__headerCartFetchPatched) {
    window.__headerCartFetchPatched = true;
    var originalFetch = window.fetch;
    window.fetch = function () {
      var args = arguments;
      var input = args[0];
      var url = typeof input === 'string' ? input : input && input.url ? input.url : '';
      return originalFetch.apply(this, args).then(function (response) {
        if (response && response.ok && url && url.indexOf('/cart') !== -1 && url.indexOf('.js') !== -1) {
          response
            .clone()
            .json()
            .then(function (data) {
              if (data && typeof data.item_count !== 'undefined' && data.items) {
                document.dispatchEvent(new CustomEvent('cart:updated', { detail: data }));
              }
            })
            .catch(function () {});
        }
        return response;
      });
    };
  }

  function init() {
    window.setTimeout(function () {
      ensureHook();
    }, 0);

    document.addEventListener('animationend', function (event) {
      if (event.target && event.target.classList && event.target.classList.contains('header-cart-count')) {
        event.target.classList.remove('is-updated');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
