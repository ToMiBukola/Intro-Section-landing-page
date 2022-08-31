let todolist = document.getElementById("todo")
let features = document.querySelector(".features")
let history = document.getElementById("history")
let company = document.querySelector(".company")
let navscreen = document.getElementById("navscreen")
let hamburger = document.querySelector("#hambug")











features.addEventListener("click", function(){
    todolist.classList.toggle("active")
})

company.addEventListener("click", function(){
    history.classList.toggle("active")
})
hamburger.addEventListener("click", function(){
    console.log(hamburger);
    navscreen.classList.toggle("show")
    if (navscreen.classList.contains("show")) {
        hamburger.src = "images/icon-close-menu.svg"
    } else {
        hamburger.src = "images/icon-menu.svg"
    }
})