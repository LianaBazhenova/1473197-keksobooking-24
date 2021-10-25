import {generateRandomItem} from './data.js';
import './generate-card.js';
import './form.js';

const ITEMS = [];
const NUMBER_OF_ITEMS = 10;

for(let i = 0; i < NUMBER_OF_ITEMS; i++) {
  const NEW_OBJECT = generateRandomItem();
  ITEMS.push(NEW_OBJECT);
}

export{ITEMS};

