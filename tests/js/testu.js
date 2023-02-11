class MobileMenu {
  constructor(button, data) {
    this.button = document.querySelector(button);
    this.element = document.querySelector(data);
    this.currentValue = this.element.getAttribute('data-menu');

    this.statusOff = 'off';
    this.statusOn = 'on';
  }

  handleClick() {
    const test =
      this.currentValue === this.statusOff ? this.statusOn : this.statusOff;
    this.element.setAttribute('data-foo', test);
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
