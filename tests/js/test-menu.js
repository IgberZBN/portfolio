// toggle de menu
export default class MobileNavbar {
  constructor(button, menu) {
    this.button = document.querySelector(button);
    this.menu = document.querySelectorAll(menu);
    this.activeClass = 'active';

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.menu.forEach((item) => {
      item.classList.toggle(this.activeClass);
    });
  }

  addClickEvent() {
    this.button.addEventListener('click', this.handleClick);
  }

  init() {
    if (this.button) {
      this.addClickEvent();
    }
    return this;
  }
}
