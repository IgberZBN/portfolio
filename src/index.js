import MobileNavbar from '../tests/js/test-menu.js';
import jsStatus from '../tests/js/test.js';
// js status
jsStatus();
// Menu
const mobileNavbar = new MobileNavbar('.mobile-menu', '.left');
mobileNavbar.init();
