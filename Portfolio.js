const menuT = document.querySelector(".menu-toggle");
const navLI = document.querySelector(".nav-links");
const nav = document.querySelector(".navbar");


menuT.addEventListener('click', () =>{
    navLI.classList.toggle('active');
});

//handle scroll effects

window.addEventListener('scroll', () =>{
    if(window.scrollY > 50){
        nav.classList.add('scrolled')
    }
    else{
        nav.classList.remove('scrolled') 
    }
});

const slides = document.querySelectorAll('.testimonial-slide');
const prevbtn = document.querySelector('.prev');
const nextbtn = document.querySelector('.next');
let CurrentSlide = 0;
slides.forEach(sl => sl.classList.remove('active'));
slides[CurrentSlide].classList.add('active');


function showslide(index){
    slides.forEach(sl => sl.classList.remove('active'));
    console.log(slides[index]);

    if(index >= slides.length) index = 0;
    if(index < 0) index = slides.length - 1;
    console.log(slides[index]);

    CurrentSlide = index;

    slides[CurrentSlide].classList.add('active');
}

prevbtn.addEventListener('click', () =>{
    CurrentSlide --;
    showslide(CurrentSlide);
});

nextbtn.addEventListener('click', () =>{
    CurrentSlide ++;
    showslide(CurrentSlide);
});





const slides2 = document.querySelectorAll('.certificate-slide');
const prevbtn2 = document.querySelector('.prev2');
const nextbtn2 = document.querySelector('.next2');
let CurrentSlide2 = 0;
slides2.forEach(sl => sl.classList.remove('active'));
slides2[CurrentSlide2].classList.add('active');


function showslide2(index){
    slides2.forEach(sl => sl.classList.remove('active'));

    if(index >= slides2.length) index = 0;
    if(index < 0) index = slides2.length - 1;

    CurrentSlide2 = index;

    slides2[CurrentSlide2].classList.add('active');
}

prevbtn2.addEventListener('click', () =>{
    CurrentSlide2 --;
    showslide2(CurrentSlide2);
});

nextbtn2.addEventListener('click', () =>{
    CurrentSlide2 ++;
    showslide2(CurrentSlide2);
});



const slides3 = document.querySelectorAll('.project-slide');
const prevbtn3 = document.querySelector('.prev3');
const nextbtn3 = document.querySelector('.next3');
let CurrentSlide3 = 0;
slides3.forEach(sl => sl.classList.remove('active'));
slides3[CurrentSlide3].classList.add('active');


function showslide3(index2){
    slides3.forEach(sl => sl.classList.remove('active'));

    if(index2 >= slides3.length) index2 = 0;
    if(index2 < 0) index2 = slides3.length - 1;

    CurrentSlide3 = index2;
    slides3[CurrentSlide3].classList.add('active');
}

prevbtn3.addEventListener('click', () =>{
    CurrentSlide3 --;
    showslide3(CurrentSlide3);
});

nextbtn3.addEventListener('click', () =>{
    CurrentSlide3 ++;
    showslide3(CurrentSlide3);
});





const submitbtn = document.querySelector('.c-submit-btn');


submitbtn.addEventListener('click', () =>{
    
});






