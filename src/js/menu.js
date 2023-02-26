export default class MobileMenu {
  constructor(button, menu, links) {
    this.button = document.querySelector(button);
    this.menu = document.querySelector(menu);
    this.link = document.querySelectorAll(links);

    this.handleClick = this.handleClick.bind(this);
    this.linkClick = this.linkClick.bind(this);
  }

  handleClick() {
    this.menu.classList.toggle('active');
    this.button.classList.toggle('active');
  }

  linkClick() {
    this.menu.classList.remove('active');
    this.button.classList.remove('active');
  }

  addClickEvent() {
    this.button.addEventListener('click', this.handleClick);
    this.link.forEach((link) => {
      link.addEventListener('click', this.linkClick);
    });
  }

  init() {
    if (this.button) {
      this.addClickEvent();
    }
    return this;
  }
}
