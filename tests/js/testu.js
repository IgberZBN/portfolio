class MobileMenu {
  constructor(data, button) {
    this.data = document.querySelector(data);
    this.button = document.querySelector(button);

    this.statusOff = 'off';
    this.statusOn = 'on';
    this.currentData;
  }

  handleClick() {
    this.currentData = this.data.getAttribute(this.data);
  }

  addClickEvent() {
    this.button.addClickEvent('click', this.handleClick);
  }

  init() {
    if (this.data) {
      this.addClickEvent();
    }
    return this;
  }
}
