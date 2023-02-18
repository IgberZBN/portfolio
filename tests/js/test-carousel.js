/* eslint-disable operator-linebreak */
/* eslint-disable no-plusplus */
class Carousel {
  constructor(carousel, carouselSliders, btnPrevious, btnNext) {
    this.carousel = document.querySelector(carousel);
    this.slides = carousel.querySelectorAll(carouselSliders);
    this.btn1 = carousel.querySelector(btnPrevious);
    this.btn2 = carousel.querySelector(btnNext);

    this.slidersTotal = this.slides.length - 1;

    this.slideActive = 0;
    this.slideNext = this.slideActive + 1;
    this.slidePrevious = this.slidersTotal;
  }

  advanceSlide() {
    this.slidePrevious = this.slideActive;

    this.slideActive =
      this.slideActive === 0 ? (this.slideActive = 0) : --this.slideActive;

    this.slideNext =
      this.slideNext === this.slidersTotal
        ? (this.slideNext = 0)
        : (this.slideNext = this.slideActive + 1);

    this.manipulateSlides(this.slidePrevious, this.slideActive, this.slideNext);
  }

  previousSlide() {
    console.log('hello');
  }

  manipulateSlides(slidePrevious, slideActive, slideNext) {
    const sliderTransition = slideNext;
    this.slides[sliderTransition].classList.add('slider-transition');

    this.slides.forEach((element) => {
      element.classList.remove('slider-next');
      element.classList.remove('slider-active');
      element.classList.remove('slider-before');
    });

    this.slides[slidePrevious].classList.add('slider-before');
    this.slides[slideActive].classList.add('slider-active');
    this.slides[slideNext].classList.add('slider-next');

    this.slides.forEach((element) => {
      setTimeout(() => {
        element.classList.remove('slider-transition');
      }, 325);
    });
  }

  addClickEvent() {
    this.btn1.addClickEvent('click', this.advanceSlide);
    this.btn2.addClickEvent('click', this.previousSlide);
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
