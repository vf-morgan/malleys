(function () {
  function onload() {
    const enterStoreLink = document.querySelector('.modal-open--link');
    const closeModalBtn = document.querySelector('.close-modal');
    const delay = 250;
    const modalWrapper = document.querySelector('.blocker');

    enterStoreLink.addEventListener('click', function(event) {
      event.preventDefault();

      modalWrapper.style.display = 'block';
      document.getElementById('password').focus();

      setTimeout(function () {
        modalWrapper.style.opacity = '1';
      }, delay);
    });

    closeModalBtn.addEventListener('click', function(event) {
      event.preventDefault();
      modalWrapper.style.opacity = '';

      setTimeout(function () {
        modalWrapper.style.display = 'none';
      }, delay);
    });

    const handleFormSubmission = async (event) => {
      const form = event.target;
      const formErrors = form.querySelector('.errors');
      const formData = new FormData(document.querySelector('#login_form'));

      form.querySelector('.password-spinner').classList.remove('hide');
      form.querySelector('.password-submit').classList.add('hide');

      if (formErrors) formErrors.remove();

      try {
        const response = await (await fetch('/password', {
          method: "POST",
          body: formData
        })).text();

        if (response) {
          const parser = new DOMParser();
          const doc = parser.parseFromString(response, 'text/html');
          const new_login_form = doc.querySelector('#login_form');

          if (new_login_form) {
            form.prepend(new_login_form.querySelector('.errors'));
            form.querySelector('.password-spinner').classList.add('hide');
            form.querySelector('.password-submit').classList.remove('hide');
          } else {
            window.location = '/';
          }
        }
      } catch (error) {
        console.log(error);
      }
    }

    document.querySelector('#login_form').addEventListener('submit', function (event) {
      event.preventDefault();

      handleFormSubmission(event);
    });
  }

  document.addEventListener('shopify:section:load', onload);
  window.addEventListener('load', onload);
})();
