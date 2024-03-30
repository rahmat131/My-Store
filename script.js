const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const bodyact = document.querySelector("body");

hamburger.addEventListener("click", () =>{

    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
    bodyact.classList.toggle("active")
})