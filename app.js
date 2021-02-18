const burger = document.querySelector('.burger');
const menu = document.querySelector('nav.deuxiemenav');
const liens = document.querySelectorAll('nav.deuxiemenav a');

burger.addEventListener('click', function(){
    menu.classList.toggle('menu-open');
});

<<<<<<< HEAD


=======
liens.forEach((lien) => {
    lien.addEventListener('click', function () {
        menu.classList.remove('nav-open');
    } );
}
)
>>>>>>> e0bd4116ba9841ae130badd1fcdb4ef6d488b8ac
