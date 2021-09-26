function getRandomIntFromRange(min, max) {
  if (min < 0 || max <= min) {
    return false;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomFloatFromRange(min, max, numberOfSimbols) {
  if (min < 0 || max <= min) {
    return false;
  }
  const number = (Math.random() * (max - min + 1) + min);
  return number.toFixed(numberOfSimbols);
}

getRandomFloatFromRange(1.7, 5.9, 3);
getRandomIntFromRange(1, 100);
