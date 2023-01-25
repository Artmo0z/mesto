let profileEditButton = document.querySelector('.profile__edit-button');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');

let nameInput = document.querySelector('.popup__input_name_value');
let jobInput = document.querySelector('.popup__input_job_value');

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
	popup.classList.add('popup_opened');
	nameInput.value = profileName.textContent;
	jobInput.value = profileJob.textContent;
}

function popupClose() {
	popup.classList.remove('popup_opened');
}

closePopup.addEventListener('click', popupClose);

profileEditButton.addEventListener('click', popupOpen);

formElement.addEventListener('submit', handleFormSubmit);