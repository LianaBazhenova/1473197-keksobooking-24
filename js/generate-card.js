import {generateRandomItem} from './data.js';

const CREATED_CARD = document.querySelector('#map-canvas');
const TEMPLATE_CARD = document.querySelector('#card').content;

const POPUPS = [];
const NUMBER_OF_ITEMS = 1;

for(let i = 0; i < NUMBER_OF_ITEMS; i++) {
  const NEW_OBJECT = generateRandomItem();
  POPUPS.push(NEW_OBJECT);
}

// функция на проверку заполненности полей
const checkContent = (elementName, keyName, className) => {
  if(!keyName){
    elementName.querySelector(className).classList.add('hidden');
  }
};

const TYPES = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

POPUPS.forEach((popup) => {
  const POPUP_CLONE = TEMPLATE_CARD.cloneNode(true);
  POPUP_CLONE.querySelector('.popup__title').textContent = popup.offer.title;
  POPUP_CLONE.querySelector('.popup__text--address').textContent = popup.offer.address;
  POPUP_CLONE.querySelector('.popup__text--price').textContent = `${popup.offer.price  } ₽/ночь`;
  POPUP_CLONE.querySelector('.popup__type').textContent = TYPES[POPUPS[0].offer.type];
  POPUP_CLONE.querySelector('.popup__text--capacity').textContent = `${popup.offer.rooms  } комнаты для ${  popup.offer.guests  } гостей`;
  POPUP_CLONE.querySelector('.popup__text--time').textContent = `Заезд после ${  popup.offer.checkin  }, выезд до ${  popup.offer.checkout}`;
  POPUP_CLONE.querySelector('.popup__features').textContent = popup.offer.features;
  POPUP_CLONE.querySelector('.popup__description').textContent = popup.offer.description;

  // а вот ниже мне нужно чтобы выводились все фото из массива offer.photos, но тоже не получается
  POPUP_CLONE.querySelector('.popup__photo').src = popup.offer.photos;
  POPUP_CLONE.querySelector('.popup__avatar').src = popup.author.avatar;

  checkContent(POPUP_CLONE, popup.offer.description, '.popup__description');
  checkContent(POPUP_CLONE, popup.offer.title, '.popup__title');

  CREATED_CARD.appendChild(POPUP_CLONE);
});

// здесь я пытаюсь вывести нужные мне .popup__features, но не получается

const POPUP_FEATURES = POPUPS[0].offer.features;
const FEATURES_CONTAINER = document.querySelector('.popup__features');
const FEATURES_ITEM_FRAGMENT = document.createDocumentFragment();

POPUP_FEATURES.forEach((POPUP_FEATURE) => {
  const POPUP_FEATUR_ITEM = FEATURES_CONTAINER.querySelector(`.popup__feature--${  POPUP_FEATURE}`);

  if (POPUP_FEATUR_ITEM) {
    FEATURES_ITEM_FRAGMENT.append(POPUP_FEATUR_ITEM);
  }
});

FEATURES_CONTAINER.innerHTML = '';
FEATURES_CONTAINER.append(FEATURES_ITEM_FRAGMENT);


/*

здесь два варианта вывода .popup__features:

вариант 1:

const POPUP_FEATURES = POPUPS[0].offer.features;
const FEATURES_CONTAINER = document.querySelector('.popup__features');
const FEATURES_ITEM_FRAGMENT = document.createDocumentFragment();

POPUP_FEATURES.forEach((POPUP_FEATURE) => {
  const POPUP_FEATUR_ITEM = FEATURES_CONTAINER.querySelector(`.popup__feature--${  POPUP_FEATURE}`);

  if (POPUP_FEATUR_ITEM) {
    FEATURES_ITEM_FRAGMENT.append(POPUP_FEATUR_ITEM);
  }
});

FEATURES_CONTAINER.innerHTML = '';
FEATURES_CONTAINER.append(FEATURES_ITEM_FRAGMENT);
*/


/*

вариант 2:

const POPUP_FEATURES = POPUPS[0].offer.features;
//const emojiContainer = document.querySelector('.popup__features');
const FEATURES_ITEM = document.querySelectorAll('.popup__feature');


FEATURES_ITEM.forEach((item) => {
  const isNecessary = POPUP_FEATURES.some(
    (POPUP_FEATURE) => item.classList.contains(`popup__feature--${  POPUP_FEATURE}`),
  );

  if (!isNecessary) {
    item.remove();
  }
});
*/
