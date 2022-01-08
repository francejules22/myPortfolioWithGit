//Window Loading
window.onload = () => {
  setTimeout (() => {
    document.querySelector("body").classList.add("display");
  },4000);
};
//End of Window Loading

//Hamburger Menu
document.querySelector(".hamburger-menu").addEventListener ("click" , () => {
  document.querySelector(".container").classList.toggle("change");
});
//End of Hamburger Menu

