const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const menuShodow = document.querySelector('.menu--close');

menuBtn.addEventListener('click',()=>{
  menuList.classList.toggle('menu__list--open');  // можно вместо toggle (переключ.) напис. add (добавить)
  menuShodow.classList.toggle('menu--open');
});

menuClose.addEventListener('click',()=>{
  menuList.classList.remove('menu__list--open');
  menuShodow.classList.remove('menu--open');
});