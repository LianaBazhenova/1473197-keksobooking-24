import {MIN_NAME_LENGTH, MAX_NAME_LENGTH, VALIDATION_ROOM, TYPE_MIN_PRICE} from './const.js';

const inputTitle = document.querySelector('#title');

inputTitle.addEventListener('input', () => {
  const valueLength = inputTitle.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    inputTitle.setCustomValidity(`Ещё ${  MIN_NAME_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    inputTitle.setCustomValidity(`Удалите лишние ${  valueLength - MAX_NAME_LENGTH } симв.`);
  } else {
    inputTitle.setCustomValidity('');
  }

  inputTitle.reportValidity();
});

const inputPrice = document.querySelector('#price');
const form = document.querySelector('.ad-form');


function onPriceChange (evt) {
  if (evt.target.matches('#type')) {
    inputPrice.placeholder = TYPE_MIN_PRICE[evt.target.value];
    inputPrice.min = TYPE_MIN_PRICE[evt.target.value];
  }
}

form.addEventListener('change', onPriceChange);

const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');

document.addEventListener('DOMContentLoaded', ()  => {
  capacity.querySelectorAll('option').forEach((option) => {
    option.disabled = true;
  });
});

roomNumber.addEventListener('change', (evt) => {
  const value = parseInt(evt.target.value, 10);
  const validation = VALIDATION_ROOM.find((item) => item.value === value);
  capacity.querySelectorAll('option').forEach((option) => {
    option.disabled = !validation.allowed.includes(parseInt(option.value, 10));
  });
});

const submitBatton = document.querySelector('.ad-form__submit');

submitBatton.addEventListener('click', () => {
  capacity.querySelectorAll('option').forEach((option) => {
    option.disabled = false;
  });
});

