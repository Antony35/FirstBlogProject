//open class burger menu
let sidenav = document.getElementById("mySidenav");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("close-nav");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

// Set the width of the side navigation to 250px
function openNav() {
  sidenav.classList.add("active");
  document.documentElement.style.overflow = 'hidden';
}

// Set the width of the side navigation to 0
function closeNav() {
  sidenav.classList.remove("active");
  document.documentElement.style.overflow = 'visible';
}
//show under menu in burger menu
let showUnderMenus = document.querySelectorAll(".drop-menu");
let showUnderMenus2 = document.querySelectorAll(".drop-menu-2")
let underMenus = document.querySelectorAll(".main-menu__drop-down-menu__under-menu");
let underMenus2 = document.querySelectorAll(".main-menu__drop-down-menu__under-menu__2");


let allowed = null;
let open = false;


showUnderMenus.forEach (function(elem, i) {
  elem.addEventListener('click', function() {
    allowed = i;
    underMenus.forEach (function(elem, i) {
      if (allowed == i) {
        if (open != true) {
          elem.style.height = 'auto';
          open = true;  
        }
        else {
          elem.style.height = '0';
          open = false;
        }
      }        
    });
  });
});

showUnderMenus2.forEach (function(elem, i) {
  elem.addEventListener('click', function() {
    allowed = i;
    underMenus2.forEach (function(elem, i) {
      if (allowed == i) {
        if (open != true) {
          elem.style.height = 'auto';
          open = true;  
        }
        else {
          elem.style.height = '0';
          open = false;
        }
      }        
    });
  });
});