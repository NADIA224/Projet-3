const burger = document.querySelector('.burger');
const menu = document.querySelector('nav.deuxiemenav');
const liens = document.querySelectorAll('nav.deuxiemenav a');

burger.addEventListener('click', function(){
    menu.classList.toggle('menu-open');
});

liens.forEach((lien) => {
    lien.addEventListener('click', function () {
        menu.classList.remove('nav-open');
    } );
}
)
