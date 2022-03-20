$(document).ready(function(){
  //owl carousel.....
  $('.owl-carousel').owlCarousel({
      margin: 15,
      items: 3,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      responsiveClass: true,
      responsiveRefreshRate: true,
      responsive: {
        0: { items: 1},
        768: { items: 1},
        1000: { items: 2},
        1200: { items: 3},
        1920: { items: 3}
      }

  });
  //wow....
  wow = new WOW({
    mobile: true,
  })
  new WOW().init();


});
