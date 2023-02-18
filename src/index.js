import MobileMenu from '../tests/js/test-menu.js';
import JsStatus from '../tests/js/test.js';
import Carousel from '../tests/js/test-carousel.js';
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
// carrousel
const carouselSlide = new Carousel(
  '.carousel',
  '.project',
  '.btn-previous',
  '.btn-next',
  '.carousel-select-btn',
);
carouselSlide.init();
