$(document).ready(function() {

  $('tr').on('click', function() {
    $(this).toggleClass('selected');
  });

  $('form').on('keyup', function() {
    if ($('.email').val() !== '' && $('.password').val() !== '') {
      $('.login-button').prop('disabled', false);
    } else {
      $('.login-button').prop('disabled', true);      
    }
  });

  var checkEmail = function(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  };

  $('form').on('submit', function(e) {
    e.preventDefault();
    if (!checkEmail($('.email').val())) { 
      $('.email').removeClass('valid').addClass('invalid');
      $('.login-button').prop('disabled', true); 
    } else {
      $('.email').removeClass('invalid').addClass('valid');      
      $('.login-button').prop('disabled', false);
    }
  
  });

});
