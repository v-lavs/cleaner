jQuery(document).ready(function () {
    //Mob menu
    var nav = jQuery('.main-nav-wrap');

    jQuery('.btn-burger').click(function (e) {
      e.preventDefault();
      nav.addClass('open');
    });

    jQuery('.btn-close ').click(function (e) {
      e.preventDefault();
      nav.removeClass('open');
    });

  jQuery('#profileForm').validate({
    submitHandler: function (form) {
      form.submit();
    },
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      lastName: {
        required: true
      },
      telephone: {
        required: true,
        digits: true
      },
      required: true,
      email: true
    },
    focusCleanup: true,
    focusInvalid: true
  });

  jQuery('#filePhoto').change(function (e) {
    for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {

      var file = e.originalEvent.srcElement.files[i];

      var img = document.createElement('img');
      var reader = new FileReader();
      reader.onloadend = function () {
        img.src = reader.result;
        jQuery(img).addClass('img-default img-fluid');
      };
      reader.readAsDataURL(file);
      jQuery('.img-default').remove();
      jQuery('.photo-wrap').append(img);
    }
  });
});