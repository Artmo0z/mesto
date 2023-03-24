enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});

function setupPopupListeners(popup, config) {
  const input = Array.from(popup.querySelectorAll(config.inputSelector));
  input.forEach((input) => {
      setupInputListener(popup, input, config);
  });
}

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((popup) => {
      setupPopupListeners(popup, config);
  });
}

function setButtonActive(button, inactiveButtonClass) {
  button.classList.remove(inactiveButtonClass);
  button.disabled = false;
};

function setButtonNoactive(button, inactiveButtonClass) {
  button.classList.add(inactiveButtonClass);
  button.disabled = true;
};

function updateSubmitButton(popup, config) {
  const input = Array.from(popup.querySelectorAll(config.inputSelector));
  const button = popup.querySelector(config.submitButtonSelector);
  const hasInvalidInput = input.map(input => input.validity.valid).every(valid => valid === true);
  if (hasInvalidInput) {
    setButtonActive(button, config.inactiveButtonClass);
  } else {
    setButtonNoactive(button, config.inactiveButtonClass);
  }
}

function setupInputListener(popup, input, config) {
  input.addEventListener('input', function(evt) {
      input.nextElementSibling.textContent = evt.target.validationMessage;
      if (input.validity.valid) {
          input.classList.remove(config.inputErrorClass);
          input.nextElementSibling.classList.remove(config.errorClass);
      } else {
          input.classList.add(config.inputErrorClass);
          input.nextElementSibling.classList.add(config.errorClass);
      }

      updateSubmitButton(popup, config);
  });
}
