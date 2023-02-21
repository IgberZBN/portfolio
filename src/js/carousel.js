export default class Carousel {
  constructor(carousel, carouselSliders, btnPrevious, btnNext, select) {
    this.carousel = document.querySelector(carousel);
    this.slides = this.carousel.querySelectorAll(carouselSliders);
    this.btn1 = this.carousel.querySelector(btnPrevious);
    this.btn2 = this.carousel.querySelector(btnNext);
    this.btnSelect = this.carousel.querySelectorAll(select);
    this.slidersTotal = this.slides.length - 1;

    this.slideActive = 0;
    this.slideNext = this.slideActive + 1;
    this.slidePrevious = this.slidersTotal;

    this.advanceSlide = this.advanceSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.selectSlide = this.selectSlide.bind(this);
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

    this.btnSelect.forEach((element) => {
      element.classList.remove('btn-active');
    });

    this.slides[slidePrevious].classList.add('slider-previous');
    this.slides[slideActive].classList.add('slider-active');
    this.slides[slideNext].classList.add('slider-next');
    this.btnSelect[slideActive].classList.add('btn-active');
    this.slides.forEach((element) => {
      setTimeout(() => {
        element.classList.remove('selected');
        element.classList.remove('slider-transition');
      }, 255);
    });
  }

  selectSlide(data) {
    if (data === 0) {
      this.previousSlide = this.slidersTotal;
    } else {
      this.previousSlide = data - 1;
    }
    if (data === this.slidersTotal) {
      this.slideNext = 0;
    } else {
      this.slideNext = data + 1;
    }
    this.slideActive = data;
    this.slides[this.slideActive].classList.add('selected');
    this.manipulateSlides(this.previousSlide, this.slideActive, this.slideNext);
  }

  addClickEvent() {
    this.btn1.addEventListener('click', this.previousSlide);
    this.btn2.addEventListener('click', this.advanceSlide);
    this.btnSelect.forEach((element) => {
      const dataNum = Number(element.getAttribute('data-js-select'));
      element.addEventListener('click', () => {
        this.selectSlide(dataNum);
      });
    });
  }

  init() {
    if (this.carousel) {
      this.slides[this.slidePrevious].classList.add('slider-previous');
      this.slides[this.slideActive].classList.add('slider-active');
      this.slides[this.slideNext].classList.add('slider-next');
      this.btnSelect[this.slideActive].classList.add('btn-active');

      this.addClickEvent();
    }
    return this;
  }
}
