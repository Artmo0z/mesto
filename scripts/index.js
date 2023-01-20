let profileEditButton = document.querySelector('.profile__edit-button');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');

let nameInput = document.querySelector('.popup__username');
let jobInput = document.querySelector('.popup__userjob');

let formElement = document.querySelector('.popup__form');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__close');

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupClose();
}

function popupOpen() {
    popup.classList.add('popup__opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

profileEditButton.addEventListener('click', popupOpen);

function popupClose() {
    popup.classList.remove('popup__opened');
}

closePopup.addEventListener('click', popupClose);

formElement.addEventListener('submit', handleFormSubmit);