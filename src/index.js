import MobileMenu from "./js/menu.js";
import Carousel from "./js/carousel.js";

const mobileMenu = new MobileMenu(
  "[data-js-toggle]",
  ".menu",
  ".hero-nav-links"
);
mobileMenu.init();

const carousel = new Carousel(
  ".carousel",
  ".project",
  '[data-js-slide="previous"]',
  '[data-js-slide="next"]',
  "[data-js-select]"
);
carousel.init();

const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", documentHeight);
documentHeight();
