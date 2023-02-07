export default function jsStatus() {
  const status = document.querySelectorAll('[data-js-status]');
  status.forEach((element) => {
    element.setAttribute('data-js-status', 'js');
  });
}
