//open close burger menu
let sidenav = document.getElementById("mySidenav");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("close-nav");
let menu = document.querySelector('.main-menu');
let html = document.querySelector('html');
openBtn.onclick = openCloseNav;
closeBtn.onclick = closeNav;

// Set the width of the side navigation to 250px
function openCloseNav() {
  sidenav.classList.toggle("active");
  closeBtn.classList.toggle("opacity-page");
  html.classList.toggle("lock-page");
}

// Set the width of the side navigation to 0
function closeNav() {
  sidenav.classList.remove("active");
  closeBtn.classList.remove("opacity-page");
  html.classList.remove("lock-page");
}

//drop-menu

let dropMenus = document.querySelectorAll('.drop-menu');
let underMenus = document.querySelectorAll('.under-menu');
let dropMenus2 = document.querySelectorAll('.drop-menu-2');
let underMenus2 = document.querySelectorAll('.under-menu-2');
let navArrows = document.querySelectorAll('.nav-arrow');
let navArrows2 = document.querySelectorAll('.nav-arrow-2');

navArrows.forEach(function(arow, index) {
  dropMenus.forEach(function(elem, index1){
    elem.addEventListener('click', function() {
      underMenus.forEach(function(elem, i) {
        if(index1 == i) {
          elem.parentNode.classList.toggle('background-li'); 
          elem.classList.toggle('under-menu');
          if (index == i) {
            arow.classList.toggle('rotate-arrow');
            console.log('lvl 1 : ' + i);
            console.log('lvl 1 : ' + index);
            console.log(arow);
          }
        }   
      })
    })
  })
})

dropMenus2.forEach(function(elem, index1){
  elem.addEventListener('click', function(event) {
    event.stopPropagation();
    underMenus2.forEach(function(elem, i) {
      if(index1 == i) {
        elem.classList.toggle('under-menu-2');
        console.log(elem.parentNode.parentNode);
        navArrows2.forEach(function(arow2, index) {
          if(index == i) {
            arow2.classList.toggle('rotate-arrow');
            console.log('lvl 2 : ' + i);
            console.log('lvl 2 : ' + index);
            console.log(arow2);

          }
        })     
      }
    })
  })
})
