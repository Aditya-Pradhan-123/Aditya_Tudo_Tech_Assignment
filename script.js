navbar = document.querySelector(".navbar-container").querySelectorAll("a");

navbar.forEach(element =>{
    element.addEventListener("click", function(){
        navbar.forEach(nav=>nav.classList.remove("active"))

        this.classList.add("active")
    })
})


const mobileBtn = document.getElementById('menu');
const nav = document.querySelector('.nav');
const mobileBtnExit = document.getElementById('close');

mobileBtn.addEventListener('click', () => {

  document.getElementById("nav").style.display = "flex";
})

mobileBtnExit.addEventListener('click', () => {
    document.getElementById("nav").style.display = "none";
})

