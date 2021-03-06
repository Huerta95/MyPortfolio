
gsap.to("nav", {duration: 1, delay:.1, autoAlpha: 1});
gsap.to('.banner p', {duration: .8, delay: 2, text: "I'm a Front-end Developer", ease: "none"});
gsap.to('.slider', {duration: 1, delay: .3, y: '-100%', ease: Power2.easeOut});
gsap.from('.slider2', {duration: 1, delay: 1, x: '100%', ease: Power2.easeOut});
gsap.to('h1 span', {duration: 1, delay: .7, text: "Hello! My name is Kenneth.", ease: "none"});
gsap.to('h1 span', {duration: .7, delay: 3.2, text: "Hello! This is my ", ease: "none"});
gsap.to('h1 a', {duration: .6, delay: 3.9, text: "Portfolio", ease: "none"});
gsap.to('h1 b', {duration: 0, delay: 4.5, text: ".", ease: "none"});


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    const navli = document.querySelectorAll('.nav_links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navSlideEffect();
    })

    navli.forEach(function(element) {
        element.addEventListener('click', () => {
            if(getComputedStyle(burger).display ==='block'){
                nav.classList.toggle('nav-active');            
                navSlideEffect();
            }
        })
    });
}

const navSlideEffect = () => {
    const navLinks = document.querySelectorAll('.nav_links li');
    const burger = document.querySelector('.burger');
    const bodyNav = document.querySelector('body');

    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = '';
        } else{
            link.style.animation = `nav_linksFade 0.5s ease forwards ${index /7 + .3}s`;
        }
    });

    bodyNav.classList.toggle('body_nav')
    burger.classList.toggle('toggle');
}

const navShadow = () => {
    setTimeout(function(){ 
        navShadow2(); 
    }, 900);
}

const navShadow2 = () => {
    const navbar = document.querySelector('nav');

    navbar.classList.toggle('nav-shadow');
}

navShadow();
navSlide();
