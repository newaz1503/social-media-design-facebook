let settings = document.querySelector('.profile-settings')
let darkBtn = document.querySelector('#dark-btn')
function menuToggle() {
    settings.classList.toggle('visible')
}
darkBtn.addEventListener("click", function () {
    darkBtn.classList.toggle("dark-mode-active")
    document.body.classList.toggle("dark-theme")

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    }else{
        localStorage.setItem("theme", "light");
    }
})
//permanent dark/light mode button
if (localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-mode-active");
    document.body.classList.remove("dark-theme");
}else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-mode-active");
    document.body.classList.add("dark-theme");
}else{
    localStorage.setItem("theme", "light");
}