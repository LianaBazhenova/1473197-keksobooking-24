const getData = (onSuccess) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((popups) => {
      onSuccess(popups);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onFail();
    }
  })
    .catch((error) => onFail(error));
};

export { getData, sendData };
