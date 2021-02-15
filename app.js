const burger = document.querySelector('.burger');
const menu = document.querySelector('nav');

burger.addEventListener('click', function(){
    menu.classList.toggle('menu-open');
});

