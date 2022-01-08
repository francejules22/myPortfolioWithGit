

// Header Menu
const hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger");
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const header = document.querySelector(".header .container");

hamburger.addEventListener('click',() => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});


//Scroll Up
document.querySelector('.scroll-btn').addEventListener('click', () => {
  document.querySelector('html').style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector('html').style.scrollBehavior = "unset";
  },1000);
})
//End of Scroll Up

//Animation using GSAP Scroll Trigger 
gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-services', {
  scrollTrigger: '.animate-services',
  duration: 1.5, 
  delay: 0.5,
  opacity: 0,
  y: -150,
  stagger: 0.3
});

gsap.from('.animate-project', {
  scrollTrigger: '.animate-project',
  duration: 1.5, 
  delay: 1,
  opacity: 0,
  y: -150,
  stagger: 0.3
});

gsap.from('.animate-about', {
  scrollTrigger: '.animate-about',
  duration: 1.5, 
  delay: 1,
  opacity: 0,
  y: -150,
  stagger: 0.3
});

gsap.from('.animate-contact', {
  scrollTrigger: '.animate-contact',
  duration: 1.5, 
  delay: 1,
  opacity: 0,
  y: -150,
  stagger: 0.3
});





