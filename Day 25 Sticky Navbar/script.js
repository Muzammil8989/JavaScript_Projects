const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
gsap.registerPlugin(ScrollTrigger);

gsap.from(".content", {
  opacity: 0,
  duration: 1,
  y: 100,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".content",
    start: "top bottom",
    toggleActions: "play none none reverse",
  },
});