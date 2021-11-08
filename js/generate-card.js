const templateCard = document.querySelector('#card').content;

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

const getTemplate = (popup) => {

  const popupClone = templateCard.cloneNode(true);
  popupClone.querySelector('.popup__title').textContent = popup.offer.title;
  popupClone.querySelector('.popup__text--address').textContent = popup.offer.address;
  popupClone.querySelector('.popup__text--price').textContent = `${popup.offer.price  } ₽/ночь`;
  popupClone.querySelector('.popup__type').textContent = types[popup.offer.type];
  popupClone.querySelector('.popup__text--capacity').textContent = `${popup.offer.rooms  } комнаты для ${  popup.offer.guests  } гостей`;
  popupClone.querySelector('.popup__text--time').textContent = `Заезд после ${  popup.offer.checkin  }, выезд до ${  popup.offer.checkout}`;


  const popupFeatures = [...popupClone.querySelectorAll('.popup__feature')];
  if (popup.offer.features) {
    const modifiers = popup.offer.features.map((feature) => `popup__feature--${feature}`);
    popupFeatures.forEach((item) => {
      const modifier = item.classList[1];
      if (!modifiers.includes(modifier)) {
        item.remove();
      }
    });
  } else {
    popupClone.querySelector('.popup__features').style.display = 'none';
  }

  popupClone.querySelector('.popup__description').textContent = popup.offer.description;

  const popupPhotos = popupClone.querySelector('.popup__photos');
  if (popup.offer.photos) {
    const photoTemplate = popupClone.querySelector('.popup__photo');
    popupPhotos.innerHTML = '';
    popup.offer.photos.map((photo) => {
      const img = photoTemplate.cloneNode(true);
      img.src = photo;
      img.height = 40;
      img.width = 40;
      popupPhotos.appendChild(img);
    });
  } else {
    popupPhotos.style.display = 'none';
  }

  popupClone.querySelector('.popup__avatar').src = popup.author.avatar;

  checkContent(popupClone, popup.offer.description, '.popup__description');
  checkContent(popupClone, popup.offer.title, '.popup__title');
  return popupClone;

};

export{getTemplate};
