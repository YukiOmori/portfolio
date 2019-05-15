let menuClickCounter = 0;
$(() => {
  $('#menu-button').on('click', function () {
    $(this).data('click', ++menuClickCounter);
    if (menuClickCounter % 2 === 1) {
      // $('#mini-nav-container').addClass('menu-clicked');
      $('#menu-button').addClass('menu-clicked');
      $('#mini-nav-container').fadeIn(300);
      $('#mini-nav-wrapper a').fadeIn(1000);
    } else {
      // $('#mini-nav-container').removeClass('menu-clicked');
      $('#menu-button').removeClass('menu-clicked');
      $('#mini-nav-container').fadeOut(300);
      $('#mini-nav-wrapper a').fadeOut(300);
    }
  });
});
