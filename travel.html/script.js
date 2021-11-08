//Container open and close of navbar
const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});


document.querySelector(".close-navbar-icon").addEventListener("click", () => {
    container.classList.remove("change");
  });

//End of container open and close of navbar

// navlink 
const colors = ["#6495ed","#7fffd4","#ffa07a","#f08080","#afeeee"];

let i= 0;

Array.from(document.querySelectorAll(".nav-link")).forEach((item) => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});
//end of navlink 


//button back and price
Array.from(document.querySelectorAll(".navigation-button")).forEach((item) => {
item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
};
});

//end of button back and price
