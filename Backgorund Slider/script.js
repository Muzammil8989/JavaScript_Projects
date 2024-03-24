const body = document.querySelector("body");
const slides = document.querySelectorAll(".slide");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let activeSlide = 0;
setBgToBody();

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide(index) {
  slides.forEach((slide, idx) => {
    if (idx === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

leftArrow.addEventListener("click", () => {
  activeSlide = activeSlide === 0 ? slides.length - 1 : activeSlide - 1;
  setBgToBody();
  setActiveSlide(activeSlide);
});

rightArrow.addEventListener("click", () => {
  activeSlide = activeSlide === slides.length - 1 ? 0 : activeSlide + 1;
  setBgToBody();
  setActiveSlide(activeSlide);
});
