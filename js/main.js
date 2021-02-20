
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

let btn_burger = document.querySelector('.intro-burger');
let nav_burger = document.querySelector('.logo-nav');
let swiper_burger = document.querySelector('.intro .swiper');

btn_burger.addEventListener('click', function(){
  this.classList.toggle('active');
  nav_burger.classList.toggle('show');
  swiper_burger.classList.toggle('swiper-burger');
});

