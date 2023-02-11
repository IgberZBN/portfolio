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
