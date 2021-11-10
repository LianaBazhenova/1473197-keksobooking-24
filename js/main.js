import './map.js';
import {createMarkers, initMap} from './map.js';
import './form.js';
import { getData } from './api.js';


initMap();

getData((popups) => {
  createMarkers(popups);
},
);

