const slides = document.querySelectorAll(".slides");
const slidesControl = document.querySelectorAll(".button-slide");

let clickHandler = function (button, slide) {
  button.addEventListener("click", function () {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("slides-active");
      slidesControl[i].classList.remove("button-active");
    }
    slide.classList.add("slides-active");
    button.classList.add("button-active");
  });
};
for (let i = 0; i < slidesControl.length; i++) {
  clickHandler(slidesControl[i], slides[i]);
}
