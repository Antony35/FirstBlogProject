let page = document.querySelector("html")
let sideMenu = document.getElementById("side-menu");
let openBtn = document.getElementById("open-btn");
let logo = document.querySelector(".logo");

openBtn.onclick = openCloseNav;

function openCloseNav() {
  page.classList.toggle("lock-page");
  sideMenu.classList.toggle("show-side-menu");
  openBtn.classList.toggle("close-burger");
    logo.classList.toggle("logo");
    logo.classList.toggle("side-logo");
    logo.classList.toggle("show-side-menu");
  }

//drop-menu

let dropMenus = document.querySelectorAll(".drop-menu");
let underMenus = document.querySelectorAll(".under-menu");
let dropMenus2 = document.querySelectorAll(".drop-menu-2");
let underMenus2 = document.querySelectorAll(".under-menu-2");
let navArrows = document.querySelectorAll(".nav-arrow");
let navArrows2 = document.querySelectorAll(".nav-arrow-2");


navArrows.forEach(function(arow, index) {
  dropMenus.forEach(function(elem, index1){
    elem.addEventListener("click", function() {
      underMenus.forEach(function(elem, i) {
        if(index1 == i) {
          elem.parentNode.classList.toggle("background-drop-menu"); 
          elem.classList.toggle("show-under-menu");
          if (index == i) {
            arow.classList.toggle("rotate-arrow");
          }
        }   
      })
    })
  })
})

dropMenus2.forEach(function(elem, index1){
  elem.addEventListener("click", function(event) {
    event.stopPropagation();
    underMenus2.forEach(function(elem, i) {
      if(index1 == i) {
        elem.parentNode.classList.toggle("background-drop-menu-2"); 
        elem.classList.toggle("show-under-menu");
        navArrows2.forEach(function(arow2, index) {
          if(index == i) {
            arow2.classList.toggle("rotate-arrow");
          }
        })     
      }
    })
  })
})
