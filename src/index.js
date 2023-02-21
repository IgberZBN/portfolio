import MobileMenu from './js/menu.js';
import Carousel from './js/carousel.js';
import JsStatus from './js/statusJs.js';
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
