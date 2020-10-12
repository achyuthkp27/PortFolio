const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

var section = document.querySelector('.ban');
window.addEventListener('scroll', () => {
    var value = window.scrollY;
    section.style.clipPath = "circle(" + value + "px at center)"
})

const toTo = document.querySelector("ul");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 50) {
        toTo.classList.add("act");
    } else {
        toTo.classList.remove("act");
    }
})
var typed = new Typed(".typing", {
    strings: ["Web Developer", "App Developer", "Programmer", "Designer", "UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});