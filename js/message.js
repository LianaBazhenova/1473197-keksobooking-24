import { ALERT_SHOW_TIME} from './const.js';
import {isEscKey} from './util.js';

const onMessageHideClick = (evt) => {
  const message = document.querySelector('.show-message');
  if (evt.type === 'click') {
    evt.preventDefault();
    message.remove();
    document.removeEventListener('click', onMessageHideClick);
  }
};

const onMessageHideKeydown = (evt) => {
  const message = document.querySelector('.show-message');
  if (isEscKey(evt)) {
    evt.preventDefault();
    message.remove();
    document.removeEventListener('keydown', onMessageHideKeydown);
  }
};

const showMessageGetError = () => {
  const body = document.querySelector('body');
  const alertContainer = document.querySelector('#error-load').content.querySelector('.error-load');
  const мessageText = alertContainer.querySelector('.error-load__message');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.backgroundColor = 'red';
  мessageText.style.fontSize = '25px';
  мessageText.style.textAlign = 'center';

  body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const showMessageSendSuccess = () => {
  const body = document.querySelector('body');
  const messageSuccessTemplate = document.querySelector('#success').content.querySelector('.success');
  const messageSuccess = messageSuccessTemplate.cloneNode(true);
  messageSuccess.classList.add('show-message');
  body.append(messageSuccess);

  document.addEventListener('click', onMessageHideClick);
  document.addEventListener('keydown', onMessageHideKeydown);
};

const showMessageSendError = () => {
  const body = document.querySelector('body');
  const messageErrorTemplate = document.querySelector('#error').content.querySelector('.error');
  const messageError = messageErrorTemplate.cloneNode(true);
  messageError.classList.add('show-message');

  body.append(messageError);

  const buttonCloseMessage = document.querySelector('.error__button');
  buttonCloseMessage.addEventListener('click', onMessageHideClick);
  document.addEventListener('click', onMessageHideClick);
  document.addEventListener('keydown', onMessageHideKeydown);
};

export { showMessageGetError, showMessageSendSuccess, showMessageSendError };
