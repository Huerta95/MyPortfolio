
gsap.to("nav", {duration: 1, delay:.1, autoAlpha: 1});
gsap.to('.slider', {duration: 1, delay: .3, y: '-100%', ease: Power2.easeOut});
gsap.from('.slider2', {duration: 1, delay: .6, x: '100%', ease: Power2.easeOut});
gsap.to('h1 span', {duration: 1, delay: .4, text: "Hello! My name is Kenneth.", ease: "none"});
gsap.to('h1 span', {duration: .7, delay: 1.8, text: "Hello! This is my ", ease: "none"});
gsap.to('h1 a', {duration: .6, delay: 2.5, text: "Portfolio", ease: "none"});
gsap.to('h1 b', {duration: 0, delay: 3.1, text: ".", ease: "none"});


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navSlideEffect();
    })

    nav.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        navSlideEffect();
    })
}

const navSlideEffect = () => {
    const navLinks = document.querySelectorAll('.nav_links li');

    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = '';
        } else{
            link.style.animation = `nav_linksFade 0.5s ease forwards ${index /7 + .3}s`;
        }
    });
    
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
