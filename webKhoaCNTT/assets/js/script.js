'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);

window.onload = function(){
  fetch("thongtincuusinhvien.json").then(res => res.json()).then(data=>{
    let a = document.querySelector("ul.ttcsv");
    let z="";
    for(let k of data)
    {
      z+=
            `<li>
              <div class="blog-card">
                <figure class="card-banner img-holder has-after" style="--width: 370; --height: 370;">
                  <img src="${k.hinh}" width="370" height="370" loading="lazy" class="img-cover">
                </figure>
                <div class="card-content">
                  <h3 class="h3">
                    <a href="#" class="card-title">${k.tt}</a>
                  </h3>
                </div>
              </div>
            </li>`

    }
    a.innerHTML+=z;
  });

  fetch("danhsachgiangvien.json").then(res => res.json()).then(data=>{
    let a = document.querySelector("ul.dsgv");
    let z="";
    for(let k of data)
    {
      z+=
            `<li>
              <div class="blog-card">
                <figure class="card-banner img-holder has-after" style="--width: 370; --height: 370;">
                  <img src="./assets/images/${k.hinh}" width="370" height="370" loading="lazy" class="img-cover">
                </figure>
                <div class="card-content">
                  <h3 class="h3">
                    <a href="#" class="card-title">${k.ten}</a>
                  </h3>
                </div>
              </div>
            </li>`

    }
    a.innerHTML+=z;
  });
}