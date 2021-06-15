let menuicon = document.querySelector(".menuicon");
let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");
const menu1 = document.querySelector(".menu1");
const menubtn = document.querySelector(".menu1>button");
const menuitems = document.querySelector(".menuitems");
let slideno = 1;
menuicon.addEventListener('click', menuclick);
function menuclick() {
    if (line2.style.width === "40px") {
        line2.style.width = `0%`;
        line3.style.width = `100%`;
        line1.style.transform = `rotate(45deg) translate(13px, 6px)`;
        line3.style.transform = `rotate(-45deg) translate(15px, -13px)`;
        menu1.style.width = `70%`;
        menubtn.style.display = `block`;
        menuitems.style.display = `flex`;
    }
    else {
        line2.style.width = `40px`;
        line3.style.width = `20px`;
        line1.style.transform = `rotate(0deg) translate(0px, 0px)`;
        line3.style.transform = `rotate(0deg) translate(0px, 0px)`;
        menu1.style.width = `0%`;
        menubtn.style.display = `none`;
        menuitems.style.display = `none`;
    }
}
const main = document.querySelector("main");
window.onload = function fun1() {
    main.style.opacity = '1';
    main.style.transform = `translateX(0px)`;
}
const slide1 = document.querySelector(".slide1");
const btnprev = document.querySelector(".btnprev");
const btnnext = document.querySelector(".btnnext");
btnnext.addEventListener("click", () => {
    slideno++;
    if (slideno > 3) {
        slideno = 1;
    }
    if (slideno === 1) {
        slide1.innerHTML = `
        <h1>Food Delivery App</h1>
        <div class="projectimg">
            <img src="foodapp1.png" alt="">
        </div>
        <div class="slidebtn">
            <button>Screenshots</button>
            <button href="https://nitish848.github.io/FoodApp1/">Visit</button>
        </div>
    `;
    }
    if (slideno === 2) {
        slide1.innerHTML = `
    <h1>Personal Portfolio</h1>
    <div class="projectimg">
        <img src="portfolio.png" alt="">
    </div>
    <div class="slidebtn">
        <button>Screenshots</button>
        <button href="https://nitishrana.website/">Visit</button>
    </div>
    `;
    }
    if (slideno === 3) {
        slide1.innerHTML = `
    <h1>Amazon Clone</h1>
    <div class="projectimg">
        <img src="hello.png" alt="">
    </div>
    <div class="slidebtn">
        <button>Screenshots</button>
        <button href="https://challenge-db586.web.app/">Visit</button>
    </div>
    `;
    }
});
btnprev.addEventListener("click", () => {
    slideno--;
    if (slideno < 1) {
        slideno = 3;
    }
    if (slideno === 1) {
        slide1.innerHTML = `
        <h1>Food Delivery App</h1>
        <div class="projectimg">
            <img src="foodapp1.png" alt="">
        </div>
        <div class="slidebtn">
            <button>Screenshots</button>
            <button href="https://nitish848.github.io/FoodApp1/">Visit</button>
        </div>
    `;
    }
    if (slideno === 2) {
        slide1.innerHTML = `
    <h1>Personal Portfolio</h1>
    <div class="projectimg">
        <img src="portfolio.png" alt="">
    </div>
    <div class="slidebtn">
        <button>Screenshots</button>
        <button href="https://nitishrana.website/">Visit</button>
    </div>
    `;
    }
    if (slideno === 3) {
        slide1.innerHTML = `
    <h1>Amazon Clone</h1>
    <div class="projectimg">
        <img src="hello.png" alt="">
    </div>
    <div class="slidebtn">
        <button>Screenshots</button>
        <button href="https://challenge-db586.web.app/">Visit</button>
    </div>
    `;
    }

});

