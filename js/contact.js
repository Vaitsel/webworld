let btn_burger = document.querySelector('.intro-burger');
let nav_burger = document.querySelector('.logo-nav');

btn_burger.addEventListener('click', function(){
  this.classList.toggle('active');
  nav_burger.classList.toggle('show');
});

