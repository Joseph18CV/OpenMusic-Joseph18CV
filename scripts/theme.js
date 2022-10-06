let dmButton = document.getElementById("darkMode")
let dmIcon = document.getElementById("icon")
let html = document.querySelector("html")

dmButton.addEventListener("click", () => {
    html.classList.toggle("darkmode")
    dm = !dm
    themeIcon()
    localStorage.setItem("darkmode", dm)
})  

function themeIcon (){
    if(dm){
        dmIcon.src = "/assets/img/sun.svg"
    }else{
        dmIcon.src = "/assets/img/moon.svg"
    }
}

function themeDarkMode () {
    dm = JSON.parse(localStorage.getItem("darkmode"))
    if(dm){
        themeIcon()
        html.classList.add("darkmode")
    }else{
        themeIcon()
        html.classList.remove("darkmode")
    }
}
themeDarkMode()