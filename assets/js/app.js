const tilt = document.querySelectorAll(".tilt");



const button = document.getElementById("toogle-button")
const Mobilemenu = document.getElementById("mobile-menu")

button.addEventListener("click", function(){
    console.log("click")
    Mobilemenu.classList.toggle("hidden")
})



