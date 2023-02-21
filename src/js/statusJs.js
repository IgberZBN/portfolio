export default class JsStatus {
  constructor(data) {
    this.data = document.querySelectorAll(data);
    this.status = 'on-js';
  }

  handleStatus() {
    this.data.forEach((element) => {
      element.setAttribute('data-js-status', this.status);
    });
  }

  init() {
    if (this.data) {
      this.handleStatus();
    }
    return this;
  }
}
