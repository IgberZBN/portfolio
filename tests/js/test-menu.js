export default class MobileNavbar {
  constructor(button, menu, link) {
    this.button = document.querySelector(button);
    this.menu = document.querySelector(menu);
    this.link = document.querySelectorAll(link);
    this.activeClass = 'active';

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.menu.classList.toggle(this.activeClass);
    this.button.classList.toggle(this.activeClass);
  }

  addClickEvent() {
    this.button.addEventListener('click', this.handleClick);
    this.link.forEach((link) => {
      link.addEventListener('click', this.handleClick);
    });
  }

  init() {
    if (this.button) {
      this.addClickEvent();
    }
    return this;
  }
}
