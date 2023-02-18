/* eslint-disable operator-linebreak */
/* eslint-disable no-plusplus */
import MobileMenu from '../tests/js/test-menu.js';
import JsStatus from '../tests/js/test.js';
// js status
const jsStatus = new JsStatus('[data-js-status]');
jsStatus.init();
// Menu
const mobileMenu = new MobileMenu(
  '.button-menu',
  '[data-menu]',
  '.hero-nav-link',
);
mobileMenu.init();

class Carousel {
  constructor(carousel, carouselSliders, btnPrevious, btnNext) {
    this.carousel = document.querySelector(carousel);
    this.slides = this.carousel.querySelectorAll(carouselSliders);
    this.btn1 = this.carousel.querySelector(btnPrevious);
    this.btn2 = this.carousel.querySelector(btnNext);
    this.slidersTotal = this.slides.length - 1;

    this.slideActive = 0;
    this.slideNext = this.slideActive + 1;
    this.slidePrevious = this.slidersTotal;

    this.advanceSlide = this.advanceSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  advanceSlide() {
    this.slidePrevious = this.slideActive;

    this.slideActive =
      this.slideActive === this.slidersTotal
        ? (this.slideActive = 0)
        : ++this.slideActive;

    this.slideNext =
      this.slideNext === this.slidersTotal
        ? (this.slideNext = 0)
        : (this.slideNext = this.slideActive + 1);

    const sliderTransition = this.slideNext;
    this.slides[sliderTransition].classList.add('slider-transition');
    this.manipulateSlides(this.slidePrevious, this.slideActive, this.slideNext);
  }

  previousSlide() {
    this.slidePrevious--;
    if (this.slidePrevious < 0) {
      this.slidePrevious = this.slidersTotal;
    }
    this.slideActive =
      this.slideActive === 0
        ? (this.slideActive = this.slidersTotal)
        : --this.slideActive;
    this.slideNext = this.slideActive + 1;
    if (this.slideNext > this.slidersTotal) {
      this.slideNext = 0;
    }
    const sliderTransition = this.slidePrevious;
    this.slides[sliderTransition].classList.add('slider-transition');
    this.manipulateSlides(this.slidePrevious, this.slideActive, this.slideNext);
  }

  manipulateSlides(slidePrevious, slideActive, slideNext) {
    this.slides.forEach((element) => {
      element.classList.remove('slider-next');
      element.classList.remove('slider-active');
      element.classList.remove('slider-previous');
    });
    this.slides[slidePrevious].classList.add('slider-previous');
    this.slides[slideActive].classList.add('slider-active');
    this.slides[slideNext].classList.add('slider-next');

    this.slides.forEach((element) => {
      setTimeout(() => {
        element.classList.remove('slider-transition');
      }, 255);
    });
  }

  addClickEvent() {
    this.btn1.addEventListener('click', this.previousSlide);
    this.btn2.addEventListener('click', this.advanceSlide);
  }

  init() {
    if (this.carousel) {
      this.slides[this.slidePrevious].classList.add('slider-previous');
      this.slides[this.slideActive].classList.add('slider-active');
      this.slides[this.slideNext].classList.add('slider-next');
      this.addClickEvent();
    }
    return this;
  }
}

const carouselSlide = new Carousel(
  '.carousel',
  '.project',
  '.btn-previous',
  '.btn-next',
);

carouselSlide.init();
