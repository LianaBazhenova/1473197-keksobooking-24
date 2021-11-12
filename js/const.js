const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;
const ALERT_SHOW_TIME = 5000;

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

const INITIAL_CORDS = {
  lat: 35.68219,
  lng: 	139.76101,
};

const LOW_PRICE = 10000;
const HIGH_PRICE = 50000;

const RANGE_PRICE = {
  type:'any',
  pricelow: 'low',
  pricemiddle: 'middle',
  pricehigh: 'high',
};

const RANGE_GUESTS = {
  zero: 0,
  one: 1,
  two: 2,
  hundred: 100,
};

const QUANTITY_ELEMENTS = 10;

export{MIN_NAME_LENGTH,
  MAX_NAME_LENGTH,
  VALIDATION_ROOM,
  TYPE_MIN_PRICE,
  ALERT_SHOW_TIME,
  INITIAL_CORDS,
  LOW_PRICE,
  HIGH_PRICE,
  RANGE_PRICE,
  RANGE_GUESTS,
  QUANTITY_ELEMENTS};
