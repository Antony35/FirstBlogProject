!function(){var e=document.querySelector(".album__name"),t=document.querySelector(".album__container__imgs"),o=document.querySelector(".to-album-name"),a=document.querySelector(".to-album-img"),n=document.querySelector(".album__container__right-arrow"),l=document.querySelector(".album__container__left-arrow"),r=t.querySelectorAll("img");function u(e,t,o,a){this.albumName=e,this.albumPage=t,this.imgs=o,this.alt=a}var s=[new u("Australie","albumAu.html",["./src/assets/galery/carouselle/au1.jpg","./src/assets/galery/carouselle/au2.jpg","./src/assets/galery/carouselle/au3.jpg"],["photo album australie","photo album australie","photo album australie"]),new u("Nouvelle Zelande","albumNZ.html",["./src/assets/galery/carouselle/nz1.jpg","./src/assets/galery/carouselle/nz2.jpg","./src/assets/galery/carouselle/nz3.jpg"],["photo album NZ","photo album NZ","photo album NZ"]),new u("Van","album-van.html",["./src/assets/galery/carouselle/van1.jpg","./src/assets/galery/carouselle/van2.jpg","./src/assets/galery/carouselle/van3.jpg"],["photo album Van","photo album Van","photo album Van"])],c=0;function i(t){setTimeout((function(){e.textContent=t.albumName,o.setAttribute("href",t.albumPage),a.setAttribute("href",t.albumPage),r.forEach((function(e,o){e.setAttribute("src",t.imgs[o]),e.setAttribute("alt",t.alt[o])}))}),500)}function m(){d("0%","30%","-30%"),h(),c==s.lastIndexOf(s[s.length-1])?i(s[c=0]):(c++,i(s[c]))}function g(){d("0%","-30%","30%"),h(),0==c?(c=s.lastIndexOf(s[s.length-1]),i(s[c])):(c--,i(s[c]))}function d(t,o,a){e.animate({transform:["translateX("+t+")","translateX("+o+")","translateX("+a+")","translateX("+t+")"],opacity:[1,0,0,1],easing:["ease-in","ease-out"]},1e3)}function h(){r.forEach((function(e){e.animate({opacity:[1,0,0,1]},1e3)}))}n.addEventListener("click",m),l.addEventListener("click",g);var f=document.querySelector("footer"),b=0;f.addEventListener("touchstart",(function(e){var t=e.changedTouches[0];b=t.pageX})),window.addEventListener("touchmouve",(function(e){e.preventDefault(),e.stopPropagation()})),f.addEventListener("touchend",(function(e){var t=e.changedTouches[0].pageX-b;if(t>=0)var o="leftToRight";else o="rightToLeft";Math.abs(t)>=100&&"leftToRight"==o&&g(),Math.abs(t)>=100&&"rightToLeft"==o&&m()}))}(),function(){var e=document.querySelector("html"),t=document.getElementById("side-menu"),o=document.getElementById("open-btn"),a=document.querySelector(".logo");o.onclick=function(){e.classList.toggle("lock-page"),t.classList.toggle("show-side-menu"),o.classList.toggle("close-burger"),a.classList.toggle("logo"),a.classList.toggle("side-logo"),a.classList.toggle("show-side-menu")};var n=document.querySelectorAll(".drop-menu"),l=document.querySelectorAll(".under-menu"),r=document.querySelectorAll(".drop-menu-2"),u=document.querySelectorAll(".under-menu-2"),s=document.querySelectorAll(".nav-arrow"),c=document.querySelectorAll(".nav-arrow-2");s.forEach((function(e,t){n.forEach((function(o,a){o.addEventListener("click",(function(){l.forEach((function(o,n){a==n&&(o.classList.toggle("show-under-menu"),t==n&&e.classList.toggle("rotate-arrow"))}))}))}))})),r.forEach((function(e,t){e.addEventListener("click",(function(e){e.stopPropagation(),u.forEach((function(e,o){t==o&&(e.classList.toggle("show-under-menu"),c.forEach((function(e,t){t==o&&e.classList.toggle("rotate-arrow")})))}))}))}))}(),document.querySelector(".to-top").addEventListener("click",(function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth",block:"center"})}));