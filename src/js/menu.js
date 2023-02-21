export default class MobileMenu {
  constructor(button, data, links) {
    this.button = document.querySelector(button);
    this.element = document.querySelector(data);
    this.link = document.querySelectorAll(links);

    this.currentValue = this.element.getAttribute('data-menu');

    this.statusOff = 'off';
    this.statusOn = 'on';
    this.statusClose = 'close';

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.currentValue =
      this.currentValue === this.statusOff ? this.statusOn : this.statusOff;
    this.setStatus();
  }

  setStatus() {
    this.button.classList.toggle(this.statusClose);
    this.element.setAttribute('data-menu', this.currentValue);
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
