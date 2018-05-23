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

  jQuery(function(){
    jQuery('#myForm').validate({
      submitHandler: function(form) {
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
      focusInvalid: false
    });
  });

  // input file

  // var inputPhoto = document.getElementById('filePhoto');
  // var inputFileLabel = document.querySelector('.label-upload');
  // var photoInfo = document.querySelector('#photoInfo');
  // var photoInfoText = document.querySelector('#photoInfo .text');
  // var resetPhoto = document.getElementById('resetPhoto');
  //
  // inputPhoto.addEventListener('change', function (e) {
  //   var data = e.target.value;
  //   if(data.trim()) {
  //     photoInfoText.innerHTML = data;
  //     inputFileLabel.style.display = 'none';
  //     photoInfo.style.display = 'block';
  //   }
  // });
  //
  // resetPhoto.addEventListener('click', function(e) {
  //   e.preventDefault();
  //   inputPhoto.value = '';
  //   photoInfoText.innerHTML = '';
  //   inputFileLabel.style.display = 'block';
  //   photoInfo.style.display = 'none';
  // });


});