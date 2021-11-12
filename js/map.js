import { getActiveState} from './form.js';
import {getTemplate} from './generate-card.js';
import {INITIAL_CORDS, QUANTITY_ELEMENTS} from './const.js';
import { compareOffers } from './filter.js';


const address = document.querySelector('#address');

const map = L.map('map-canvas');

const initMap = () => {
  map.on('load', () => {
    getActiveState();
  })
    .setView({
      lat: 35.68219,
      lng: 	139.76101,
    }, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

};

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.68219,
    lng: 	139.76101,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

address.value = `${mainPinMarker.getLatLng().lat} ${mainPinMarker.getLatLng().lng}`;

mainPinMarker.on('moveend', () => {
  const pinCoords = mainPinMarker.getLatLng();
  address.value = `${pinCoords.lat.toFixed(5)} ${pinCoords.lng.toFixed(5)}`;
});

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (popup) => {
  const { location } = popup;

  const pinIcon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat: location.lat,
      lng: location.lng,
    },
    {
      icon: pinIcon,
    },
  );

  marker
    .addTo(markerGroup)
    .bindPopup(
      getTemplate(popup),
      {
        keepInView: true,
      },
    );

  return marker;
};

const createMarkers = (popups) => {
  markerGroup.clearLayers();
  popups.
    slice()
    .sort(compareOffers)
    .slice(0, QUANTITY_ELEMENTS)
    .forEach((popup) => {
      createMarker(popup);
    });
};


const setInitialSettings = () => {

  address.value = `${INITIAL_CORDS.lat} ${INITIAL_CORDS.lng}`;

  mainPinMarker.setLatLng({
    lat: 35.68219,
    lng: 	139.76101,
  });

  map.setView({
    lat: 35.68219,
    lng: 	139.76101,
  }, 10);
  map.closePopup();
};

export{setInitialSettings, createMarkers, initMap};

