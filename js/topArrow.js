let topArrow = document.querySelector(".to-top")

  topArrow.addEventListener("click", function(e){
    e.preventDefault()
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });