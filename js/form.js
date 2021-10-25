const inputTitle = document.querySelector('#title');
const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;

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

const TYPE_MIN_PRICE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

function onPriceChange (evt) {
  if (evt.target.matches('#type')) {
    inputPrice.placeholder = TYPE_MIN_PRICE[evt.target.value];
    inputPrice.min = TYPE_MIN_PRICE[evt.target.value];
  }
}

form.addEventListener('change', onPriceChange);


const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');

const validationRoom = [
  {
    value: 1,
    allowed: [1],
  },
  {
    value: 2,
    allowed: [1, 2],
  },
  {
    value: 3,
    allowed: [1, 2, 3],
  },
  {
    value: 100,
    allowed: [0],
  },
];

roomNumber.addEventListener('change',  (evt) => {
  const value = parseInt(evt.target.value, 10);
  const validation = validationRoom.find((item) => item.value === value);
  capacity.querySelectorAll('option').forEach((option) => {
    option.disabled = !validation.allowed.includes(parseInt(option.value, 10));
  });
});
