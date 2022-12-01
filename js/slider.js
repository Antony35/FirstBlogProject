let slides = document.querySelectorAll(".slider > a")

slides.forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault()
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });
});