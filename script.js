
// Header Menu
const hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger");
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const header = document.querySelector(".header .container");

hamburger.addEventListener('click',() => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

// End of Header Menu


//Contact Menu (SignIn & SignUp)
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const accountContainer = document.getElementById('account-container');

signUpButton.addEventListener('click', () => {
     accountContainer.classList.add("right-panel-active")
})

signInButton.addEventListener('click', () => {
    accountContainer.classList.remove("right-panel-active")
})
//End Contact Menu (SignIn & SignUp)



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

gsap.from('.account-container', {
  scrollTrigger: '.account-container',
  duration: 1.5, 
  delay: 1,
  opacity: 0,
  y: -150,
  stagger: 0.3
});

//End of Animation using GSAP Scroll Trigger 



