const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;

const TYPE_MIN_PRICE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const VALIDATION_ROOM = [
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

export{MIN_NAME_LENGTH, MAX_NAME_LENGTH, VALIDATION_ROOM, TYPE_MIN_PRICE};
