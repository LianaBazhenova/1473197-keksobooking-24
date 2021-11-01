import {generateRandomItem} from './data.js';

const templateCard = document.querySelector('#card').content;
const popups = [];
const numberOfItems = 2;

for(let i = 0; i < numberOfItems; i++) {
  popups.push(generateRandomItem());
}

const checkContent = (elementName, keyName, className) => {
  if(!keyName){
    elementName.querySelector(className).classList.add('hidden');
  }
};

const types = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

function getTemplate () {

  popups.forEach((popup) => {
    const popupClone = templateCard.cloneNode(true);
    popupClone.querySelector('.popup__title').textContent = popup.offer.title;
    popupClone.querySelector('.popup__text--address').textContent = popup.offer.address;
    popupClone.querySelector('.popup__text--price').textContent = `${popup.offer.price  } ₽/ночь`;
    popupClone.querySelector('.popup__type').textContent = types[popups[0].offer.type];
    popupClone.querySelector('.popup__text--capacity').textContent = `${popup.offer.rooms  } комнаты для ${  popup.offer.guests  } гостей`;
    popupClone.querySelector('.popup__text--time').textContent = `Заезд после ${  popup.offer.checkin  }, выезд до ${  popup.offer.checkout}`;

    const popupFeatures = popups[0].offer.features;
    const popupContainer = popupClone.querySelector('.popup__features');
    const featuresItem = popupContainer.querySelectorAll('.popup__feature');

    featuresItem.forEach((item) => {
      const isNecessary = popupFeatures.some(
        (popupFeature) => item.classList.contains(`popup__feature--${  popupFeature}`),
      );
      if (!isNecessary) {
        item.remove();
      }
    });

    popupClone.querySelector('.popup__description').textContent = popup.offer.description;

    const popupPhotos = popupClone.querySelector('.popup__photos');
    popupPhotos.innerHTML = '';
    popups[0].offer.photos.forEach((photo) => {
      const img = document.createElement('img');
      img.classList.add('popup__photo');
      img.src = photo;
      img.height = 40;
      img.width = 40;
      popupPhotos.appendChild(img);
    });

    popupClone.querySelector('.popup__avatar').src = popup.author.avatar;

    checkContent(popupClone, popup.offer.description, '.popup__description');
    checkContent(popupClone, popup.offer.title, '.popup__title');
    //console.log(popupClone);
    return popupClone;
  });

}

export{popups, getTemplate};
