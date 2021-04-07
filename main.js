'use strict';

//Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarBtn = document.querySelector('.navbar__toggle-btn')
const navbarHeight = navbar.getBoundingClientRect().height;
const navbarBtnHeight = navbarBtn.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    if(window.scrollY > navbarHeight/2){
        navbar.classList.add('navbar--dark');
        navbarBtn.classList.add('dark');
    }else{
        navbar.classList.remove('navbar--dark');
        navbarBtn.classList.remove('dark');
    }
});

const home = document.querySelector('.home__container');
const homeheight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    home.style.opacity = 1-window.scrollY/homeheight;
});


//handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event)=>{
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }

    scrollIntoView(link);
});

//handle click on "contact me" button on home
const homecontactBtn = document.querySelector('.home__contact');
homecontactBtn.addEventListener('click', ()=>{
    scrollIntoView('#contact');
});

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}

//arrowBtn scrolling
const arrowBtn = document.querySelector('.arrowBtn');
document.addEventListener('scroll', ()=>{
    if(window.scrollY > homeheight/2){
        arrowBtn.classList.add('dark');
    }else{
        arrowBtn.classList.remove('dark');
    }
});
arrowBtn.addEventListener('click', ()=>{
    scrollIntoView('#home');
});