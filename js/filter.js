import { createMarkers } from './map.js';
import { debounce } from './util.js';
import { getData } from './api.js';
import { LOW_PRICE, HIGH_PRICE, RANGE_PRICE, RANGE_GUESTS } from './const.js';


const mapFilters = document.querySelector('.map__filters');
const housingType = mapFilters.querySelector('#housing-type');
const housingPrice = mapFilters.querySelector('#housing-price');
const housingRooms = mapFilters.querySelector('#housing-rooms');
const housingGuests = mapFilters.querySelector('#housing-guests');
const mapFeatures = document.querySelector('.map__features');
const features = [...mapFeatures.querySelectorAll('input[type=checkbox]')];


const getCheckFeatures = () => features.filter((feature) => feature.checked === true).map((feature) => feature.value);

const filterOffers = ({ offer }) => {
  const matchType = offer.type === housingType.value || housingType.value ===  RANGE_PRICE.type;

  const getCheckPrice = () => {
    if (housingPrice.value === RANGE_PRICE.pricelow) {
      return offer.price < LOW_PRICE;
    } else if (housingPrice.value === RANGE_PRICE.pricehigh) {
      return offer.price > HIGH_PRICE;
    } else if (housingPrice.value === RANGE_PRICE.pricemiddle) {
      return offer.price > LOW_PRICE && offer.price < HIGH_PRICE;
    } else if (housingPrice.value === RANGE_PRICE.type) {
      return true;
    }
  };

  const getCheckNumberRooms = offer.rooms === Number(housingRooms.value) || housingRooms.value === RANGE_PRICE.type;

  const getCheckGuests = () => {
    if (housingGuests.value === String(RANGE_GUESTS.one)) {
      return offer.guests === RANGE_GUESTS.one;
    } else if (housingGuests.value === String(RANGE_GUESTS.two)) {
      return offer.guests === RANGE_GUESTS.two;
    } else if (housingGuests.value === String(RANGE_GUESTS.zero)) {
      offer.guests >= RANGE_GUESTS.hundred;
    } else if (housingGuests.value === RANGE_PRICE.type) {
      return true;
    }
  };

  const matchOffers = matchType && getCheckPrice() && getCheckNumberRooms && getCheckGuests();
  return matchOffers;
};

const getFeaturesRank = ({ offer }) => offer.features && offer.features.length || 0;

const compareOffers = (offerA, offerB) => {
  const rankA = getFeaturesRank(offerA);
  const rankB = getFeaturesRank(offerB);
  return rankB - rankA;
};

const getFilterOffers = (offers) => {
  let filteredOffers = offers.filter(filterOffers);

  const checkedFeatures = getCheckFeatures();
  if (checkedFeatures.length) {
    filteredOffers = filteredOffers
      .filter(({ offer }) => offer.features && offer.features.length)
      .filter(({ offer }) =>
        checkedFeatures.every((feature) => offer.features.includes(feature)));
  }

  return filteredOffers;
};


const clearFilter = () => {
  mapFilters.reset();
  getData((popups) => createMarkers(popups));
};

const setFilterChange = (cb) => {
  mapFilters.addEventListener('change', debounce(cb));
};


export { setFilterChange, compareOffers, getFilterOffers, clearFilter };

