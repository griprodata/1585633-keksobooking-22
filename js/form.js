const typeElement = document.querySelector('#type');
const priceElement = document.querySelector('#price');
const timeinElement = document.querySelector('#timein');
const timeoutElement = document.querySelector('#timeout');

export function initForm() {

  typeElement.addEventListener('change', function (event) {
    if (event.target.value === 'flat') {
      priceElement.min = 1000;
      priceElement.placeholder = 1000;
    } else if (event.target.value === 'house') {
      priceElement.min = 5000;
      priceElement.placeholder = 5000;
    } else if (event.target.value === 'palace') {
      priceElement.min = 10000;
      priceElement.placeholder = 10000;
    } else if (event.target.value === 'bungalow') {
      priceElement.min = 0;
      priceElement.placeholder = 0;
    }
  })

  timeinElement.addEventListener('change', function (event) {
    timeoutElement.value = event.target.value;
  })

  timeoutElement.addEventListener('change', function (event) {
    timeinElement.value = event.target.value;
  })
}
