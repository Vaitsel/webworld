let btn_burger = document.querySelector('.intro-burger');
let nav_burger = document.querySelector('.logo-nav');
let title_burger = document.querySelector('h1');

btn_burger.addEventListener('click', function(){
  this.classList.toggle('active');
  nav_burger.classList.toggle('show');
  title_burger.classList.toggle('title-show');
});

