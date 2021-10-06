function getRandomIntFromRange(min, max) {
  const errorRange = 'Задан некорректный диапазон';
  if (min < 0 || max < 0) {
    return errorRange;
  }
  if (max < min) {
    const swap = max;
    max = min;
    min = swap;
  }
  if (min === max) {
    return max;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomFloatFromRange(min, max, numberOfSimbols) {
  const errorRange = 'Задан некорректный диапазон';
  if (min < 0 || max < 0) {
    return errorRange;
  }
  if (max < min) {
    const swap = max;
    max = min;
    min = swap;
  }
  if (min === max) {
    return null;
  }
  const number = (Math.random() * (max - min) + min);
  return +number.toFixed(numberOfSimbols);
}


// module4-task1
const ITEMS = [];

const NUMBER_OF_ITEMS = 10;

for(let i = 0; i < NUMBER_OF_ITEMS; i++) {
//author
// avatar
  let avatarObj = '';
  let avatarNumber = getRandomIntFromRange(1,10);
  if (avatarNumber < 10) {
    avatarNumber = `0${avatarNumber}`;
  }
  avatarObj = `img/avatars/user${avatarNumber}.png`;

  //offer
  //price
  const RANDOM_INT_NUMBER_PRICE = getRandomIntFromRange(0, 10000);

  //type
  const TYPES_OF_HOUSING = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
  const TYPE_HOUSING_NUMBER = TYPES_OF_HOUSING[getRandomIntFromRange(0,4)];

  //rooms
  const RANDOM_INT_NUMBER_ROOMS = getRandomIntFromRange(1, 6);

  //guests
  const RANDOM_INT_NUMBER_GUESTS = getRandomIntFromRange(1, 10);

  //checkin
  const CHECKIN_TIME = ['12:00', '13:00', '14:00'];
  const CHECKIN_TIME_NUMBER = CHECKIN_TIME[getRandomIntFromRange(0,2)];

  //checkout
  const CHECKOUT_TIME = ['12:00', '13:00', '14:00'];
  const CHECKOUT_TIME_NUMBER = CHECKOUT_TIME[getRandomIntFromRange(0,2)];

  //features
  const LIST_OF_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  const LIST_OF_FEATURES_NUMBER = LIST_OF_FEATURES.slice(0, getRandomIntFromRange(0,5));

  //photos
  const LIST_OF_PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
  const LIST_OF_PHOTOS_NUMBER = LIST_OF_PHOTOS[getRandomIntFromRange(0,2)];

  //location
  //lat
  const LAT_NUMBER = getRandomFloatFromRange(35.65, 35.7, 5);

  //lng
  const LNG_NUMBER = getRandomFloatFromRange(139.7, 139.8, 5);

  //adress
  const addressOffer = `${LAT_NUMBER}, ${LNG_NUMBER}`;

  const RANDOM_OBJECT = {
    author: {
      avatar: avatarObj,
    },

    offer: {
      title: 'Уютный дом в пригороде Токио!',
      address: addressOffer,
      price: RANDOM_INT_NUMBER_PRICE,
      type: TYPE_HOUSING_NUMBER,
      rooms: RANDOM_INT_NUMBER_ROOMS,
      guests: RANDOM_INT_NUMBER_GUESTS,
      checkin: CHECKIN_TIME_NUMBER,
      checkout: CHECKOUT_TIME_NUMBER,
      features: LIST_OF_FEATURES_NUMBER,
      description: 'Здесь есть всё для комфортного проживания!',
      photos: LIST_OF_PHOTOS_NUMBER,
    },

    location: {
      lat: LAT_NUMBER,
      lng: LNG_NUMBER,
    },
  };

  ITEMS.push(RANDOM_OBJECT);
}

