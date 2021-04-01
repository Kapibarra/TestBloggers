import "./scss/index.scss";
import Splide from '@splidejs/splide';

/* burger */
(function () {
  const hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('nav'),

    doToggle: function (e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    },
  };
  hamburger.navToggle.addEventListener('click', function (e) { hamburger.doToggle(e); });
}());

function burgerButtonToggle() {
  const burgerButton = document.querySelector(".nav-toggle")
  const yPos = window.scrollY;
  if (yPos > 80) {
    burgerButton.classList.add("unvisible")
    burgerButton.classList.remove("visible");
  } else {
    burgerButton.classList.remove("unvisible");
    burgerButton.classList.add("visible");
  }
}
window.addEventListener("scroll", burgerButtonToggle);

/* Slider resizing */
function ResizeSlider() {
  if (window.screen.width <= 648){
    new Splide( '.splide', {
      perPage: 1,
    } ).mount();
  } else if (window.screen.width <= 948) {
    new Splide( '.splide', {
      perPage: 2,
    } ).mount();
  } else {
    new Splide( '.splide', {
      perPage: 3,
    } ).mount();
  }
}
ResizeSlider();
