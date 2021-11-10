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

const isEscKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export{getRandomIntFromRange, getRandomFloatFromRange, isEscKey, debounce};


