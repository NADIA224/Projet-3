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

const tl = gsap.timeline({defaults:{ease:'power1.out'}});

tl.to(".text",{y:'0%', duration:1, stagger:0.1});
tl.to(".slider",{y:"-100%", duration:1.5, delay:1});
tl.to(".intro",{y:"-100%", duration:1}, "-=1.1");
tl.fromTo("nav",{opacity:0},{opacity:1, duration:1});

