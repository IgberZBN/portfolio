export default class Carousel {
  constructor(carousel, slides, btnP, btnN, btnS) {
    this.carousel = document.querySelector(carousel);
    this.slides = this.carousel.querySelectorAll(slides);
    this.btnNext = this.carousel.querySelector(btnN);
    this.btnPrevious = this.carousel.querySelector(btnP);
    this.btnSelect = this.carousel.querySelectorAll(btnS);

    this.currentSlide = 1;
    this.classActive = 'slide-active';

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.manipulateSlides = this.manipulateSlides.bind(this);
    this.selectSlide = this.selectSlide.bind(this);
  }

  nextSlide() {
    this.currentSlide =
      this.currentSlide === this.slides.length - 1
        ? (this.currentSlide = 0)
        : ++this.currentSlide;

    this.manipulateSlides();
  }

  previousSlide() {
    this.currentSlide =
      this.currentSlide === 0
        ? (this.currentSlide = this.slides.length - 1)
        : --this.currentSlide;

    this.manipulateSlides();
  }

  selectSlide(num) {
    this.currentSlide = num;
    this.manipulateSlides();
  }

  manipulateSlides() {
    this.slides.forEach((slide) => {
      slide.classList.remove(this.classActive);
    });

    this.btnSelect.forEach((selectBtn) => {
      selectBtn.classList.remove(this.classActive);
    });

    this.slides[this.currentSlide].classList.add(this.classActive);
    this.btnSelect[this.currentSlide].classList.add(this.classActive);
  }

  addClickEvent() {
    this.btnNext.addEventListener('click', this.nextSlide);
    this.btnPrevious.addEventListener('click', this.previousSlide);

    this.btnSelect.forEach((btn) => {
      const dataNum = Number(btn.getAttribute('data-js-select'));
      btn.addEventListener('click', () => {
        this.selectSlide(dataNum);
      });
    });
  }

  init() {
    if (this.carousel) {
      this.slides[this.currentSlide].classList.add(this.classActive);
      this.btnSelect[this.currentSlide].classList.add(this.classActive);
      this.addClickEvent();
    }
    return this;
  }
}
