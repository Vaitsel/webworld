
var mySwiper = new Swiper('.intro .swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      pagination: {
        el: '.intro .swiper-pagination',
        clickable: true,
      },

});

var mySwiper = new Swiper('.testimonials .swiper-container', {
    pagination: {
      el: '.testimonials .swiper-pagination',
      clickable: true,
    },

});

// $('.intro-burger').on('click', function(e) {
//   e.preventDefault();
//   $('.intro-burger').toggleClass("active");
//   $('.logo-nav').toggleClass("active");
// });
