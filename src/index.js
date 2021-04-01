import "./scss/index.scss";
import Splide from '@splidejs/splide';
/* dropdown select */

  const navigationSelect = document.querySelector('.select-wrapper');
  const navigationSelect2 = document.querySelector('.select-wrapper2');
  const navigationSelect3 = document.querySelector('.select-wrapper3');
  
  function initSelect(elem) {
    const selectHolder = elem.querySelector('.holder');
    const selectOptions = elem.querySelectorAll('.dropdownOption li');
    const dropHolder = elem.querySelector('.dropdown');
   let selectedOption = selectOptions[0];
  
    selectedOption.classList.add('current');
  
    selectHolder.addEventListener('click', function () {
      dropHolder.classList.toggle('active');
     });
  
    selectOptions.forEach(function(currentElement) {
      currentElement.addEventListener('click', function(){
        selectedOption.classList.remove('current');
        selectedOption = currentElement;
        currentElement.classList.add('current');
        selectHolder.innerText = currentElement.textContent;
        dropHolder.classList.toggle('active');
      });
    });
  }
  if (document.getElementById('main__sort-nav')) {
    initSelect(navigationSelect);
    initSelect(navigationSelect2);
    initSelect(navigationSelect3);
  }
  
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
      perPage: 4,
    } ).mount();
  }
}
if (document.querySelector('.splide')) {
  ResizeSlider();
}


