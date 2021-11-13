import './map.js';
import {getInactiveState} from './form.js';
import './form.js';
import {createMarkers, initMap} from './map.js';
import { getData } from './api.js';
import './filter.js';
import {getFilterOffers, setFilterChange} from './filter.js';


getInactiveState();

getData((popups) => {
  createMarkers(popups);
  initMap();
  setFilterChange(() => createMarkers(getFilterOffers(popups)));
},
);
