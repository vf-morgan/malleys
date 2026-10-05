(function($){
  var icePack = {
    icePackVariationId: 41953198538924,
    $continueBtn: null,
    $form: null,

    init: function(){
      const vm = this;
      $.getJSON('https://shopify.malleys.co119.co/api/icepack-settings/' + Shopify.Checkout.token, function(response){
        if ( response.include_ice_pack === true) {
          vm.addToggleOption();
          vm.checkIcePack();
        }
      });
    },

    addToggleOption: function(){
      const vm = this;
      const htmlContent = `
      <div class="section">
 
        <div class="section__content">
          <fieldset class="content-box">
            <div class="content-box__row">
              <div class="checkbox__input">
                <input class="input-checkbox" data-backup="remember_me" type="checkbox" value="1" id="icepack_checkbox" checked>
              </div>
              <label class="checkbox__label" for="icepack_checkbox">
                Include Ice Pack
              </label>
            </div>
          </fieldset>
        </div>
      </div>
      `;

      $('.section--shipping-method').after(htmlContent);
      $('#icepack_checkbox').on('change', function(){
        if ($(this).prop("checked")) {
          localStorage.removeItem('reject_icepack');
          vm.mayAddIcePack();
        } else {
          localStorage.setItem('reject_icepack', Shopify.Checkout.token);
          vm.removeIcePack();
        }
      });
    },

    addIcePackToCart: function(){
      let formData = {
        'items': [{
          'id': this.icePackVariationId,
          'quantity': 1 
        }]
      };

      $.ajax({
        type: "POST",
        url: "/cart/add.js",
        dataType: 'JSON',
        data: formData,
        success: function(response){
          location.reload();
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          console.log("Request Error", errorThrown);
        }
      });
    },

    removeIcePack: function(){
      let formData = {
        'id': this.icePackVariationId,
        'quantity': 0
      };

      $.ajax({
        type: "POST",
        url: "/cart/change.js",
        dataType: 'JSON',
        data: formData,
        success: function(response){
          console.log('Success response', response);
          location.reload();
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          console.log("Request Error", errorThrown);
        }
      });
    },

    mayAddIcePack: function(){
      const vm = this;
      // Double check if the item is in the cart already
      $.getJSON('/cart.js', function(data){
        const inCart = data.items.filter((i) => i.id === vm.icePackVariationId);
        if ( inCart.length === 0) {
          vm.addIcePackToCart();
        }
      });
    },

    checkIcePack: function(){
      const rejectIcePackId = localStorage.getItem('reject_icepack');
      if ( rejectIcePackId ) {
        // Make sure the ice pack is not automatically added when the checkbox is manually unchecked
        if ( rejectIcePackId === Shopify.Checkout.token) {
          $('#icepack_checkbox').removeAttr('checked');
        } else {
          this.mayAddIcePack();
        }
      } else {
        this.mayAddIcePack();
      }
    }
  }

  $(document).ready(function(){
    if ( Shopify.Checkout.step === 'shipping_method') {
      icePack.init();
    }
  });
})(Checkout.jQuery);