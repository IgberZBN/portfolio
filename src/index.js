import MobileNavbar from '../tests/js/test-menu.js';
import JsStatus from '../tests/js/test.js';
// js status
const jsStatus = new JsStatus('[data-js-status]');
jsStatus.init();
// Menu
const mobileNavbar = new MobileNavbar(
  '.button-menu',
  '.menu',
  '.hero-nav-link',
);
mobileNavbar.init();
