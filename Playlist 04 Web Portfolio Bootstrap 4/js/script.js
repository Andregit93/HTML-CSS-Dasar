//smoth navbar
$(".page-scroll").on('click', function (e) {

  var href = $(this).attr("href");

  var elemenHref = $(href);

  $('html,body').animate({
    scrollTop: elemenHref.offset().top - 55
  }, 1250, 'easeInOutExpo');

  e.preventDefault();

});

//paralax
//about
$(window).on('load', function () {
  $('.pKiri').addClass('pmuncul');
  $('.pKanan').addClass('pmuncul');
});


$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  //jumbotron
  $('.jumbotron img').css({
    'transform': 'translate(0px, ' + wScroll / 4 + '%)'
  });

  $('.jumbotron h1').css({
    'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
  });

  $('.jumbotron p').css({
    'transform': 'translate(0px, ' + wScroll / 0.8 + '%)'
  });

  //portfolio
  if (wScroll > $('.portfolio').offset().top - 200) {
    $('.portfolio .thumbnail').each(function (i) {
      setTimeout(function () {
        $('.portfolio .thumbnail').eq(i).addClass('muncul');
      }, 350 * i + 1);
    });

  }

});