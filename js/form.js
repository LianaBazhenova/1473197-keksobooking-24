import {MIN_NAME_LENGTH, MAX_NAME_LENGTH, VALIDATION_ROOM, TYPE_MIN_PRICE} from './const.js';
import { sendData } from './api.js';
import {showMessageSendSuccess, showMessageSendError} from './message.js';
import {setInitialSettings, initMap} from './map.js';

const form = document.querySelector('.ad-form');
const formFieldset= document.querySelectorAll('.ad-form__element');
const mapFilter = document.querySelectorAll('.map__filter');
const mapFilters =  document.querySelector('.map__filters');

function getInactiveState() {
  document.addEventListener('DOMContentLoaded', () => {
    form.classList.add('ad-form--disabled');
    mapFilters.classList.add('map__filters--disabled');
    formFieldset.disabled = true;
    mapFilter.disabled = true;
  });
}

function getActiveState() {
  document.addEventListener('DOMContentLoaded', () => {
    form.classList.remove('ad-form--disabled');
    mapFilters.classList.remove('map__filters--disabled');
    formFieldset.disabled = false;
    mapFilter.disabled = false;
  });
}

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
const typeSelect = document.querySelector('#type');

function onPriceChange (evt) {
  if (evt.target.matches('#type')) {
    inputPrice.placeholder = TYPE_MIN_PRICE[evt.target.value];
    inputPrice.min = TYPE_MIN_PRICE[evt.target.value];
  }
}

form.addEventListener('change', onPriceChange);

const onPriceValueSet = () => {
  inputPrice.min = TYPE_MIN_PRICE[typeSelect.value];
  inputPrice.placeholder = TYPE_MIN_PRICE[typeSelect.value];
};

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

const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

function timeChange (evt) {
  if (evt.target.matches('#timein')) {
    timeOut.value = evt.target.value;
  } else if (evt.target.matches('#timeout')) {
    timeIn.value = evt.target.value;
  }
}

form.addEventListener('change', timeChange);

const clearForm = () => {
  form.reset();
  onPriceValueSet();
  setInitialSettings();
  showMessageSendSuccess();
};

const resetButton = document.querySelector('.ad-form__reset');
resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  form.reset();
  setInitialSettings();
  onPriceValueSet();
  initMap();
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  sendData(clearForm, showMessageSendError, formData);
});

export{getInactiveState, getActiveState};
