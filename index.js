let menuicon = document.querySelector(".menuicon");
let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");
const menu1 = document.querySelector(".menu1");
menuicon.addEventListener('click', menuclick);
function menuclick() {
    if (line2.style.width === "40px") {
        line2.style.width = `0%`;
        line3.style.width = `100%`;
        line1.style.transform = `rotate(45deg) translate(13px, 6px)`;
        line3.style.transform = `rotate(-45deg) translate(15px, -13px)`;
        menu1.style.width = `70%`;
    }
    else {
        line2.style.width = `40px`;
        line3.style.width = `20px`;
        line1.style.transform = `rotate(0deg) translate(0px, 0px)`;
        line3.style.transform = `rotate(0deg) translate(0px, 0px)`;
        menu1.style.width = `0%`;
    }
}
