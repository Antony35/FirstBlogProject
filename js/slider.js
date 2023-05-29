let slides = document.querySelectorAll(".anchor > a")

slides.forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault()
    console.log("1");
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      block: "center",
    });
  });
});