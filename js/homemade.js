let textZone = document.querySelector('.homemade > h2');
let txt = "< homemade />";
let write = false;


function typewriter(word, index) {
  if(index < word.length) {
    setTimeout(() => {
      textZone.innerHTML += word[index]
      typewriter(txt, index + 1)
    },300)
  }
}



window.addEventListener('scroll', function(){
  
  let pos = textZone.getBoundingClientRect();
  let viewPortY = pos.y;
  if(viewPortY > 20 && viewPortY < this.screen.height - 20 && write == false) {  
    setTimeout(() => {
      typewriter(txt, 0)
    }, 500);
    write = true;
  }
});