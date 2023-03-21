const profileEditButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const profileEditPopup = document.querySelector('.popup_edit-profile');
const nameInput = document.querySelector('.popup__input_name_value');
const jobInput = document.querySelector('.popup__input_job_value');
const popup = document.querySelector('.popup');
const formElement = popup.querySelector('.popup__form');
const closePopupButton = profileEditPopup.querySelector('.popup__close');
const addPopupPhoto = document.querySelector('.popup_addPhoto');
const addButtonPhoto = document.querySelector('.profile__add-button');
const closePopupAddPhotoButton = addPopupPhoto.querySelector('.popup__close-addphoto');
const listCards = document.querySelector('.list-photo');
const openPhotoPopup = document.querySelector('.popup_open-cards');
const openImage = openPhotoPopup.querySelector('.popup__open-image');
const openTitle = openPhotoPopup.querySelector('.popup__open-title');
const closePopupCardButton = openPhotoPopup.querySelector('.popup__close-open-cards');
const addFormCard = document.querySelector('.popup__form-cards');
const nameImage = addFormCard.querySelector('.popup__input_name_image');
const linkImage = addFormCard.querySelector('.popup__input_link_image');
const templateCard = document.querySelector('#card-template').content;

const initialCards = [
  {
    name: 'Tokyo, Japan',
    link: 'https://images.unsplash.com/photo-1678951599840-789b26234966?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
  },
  {
    name: 'Chenonceaux, France',
    link: 'https://images.unsplash.com/photo-1679040630230-d6d4bb460493?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    name: 'Molde, Norway',
    link: 'https://images.unsplash.com/photo-1679068474125-de5bfe7b3518?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Morocco',
    link: 'https://images.unsplash.com/photo-1679151009294-f89d3f7b849c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Shokawa River, Japan',
    link: 'https://images.unsplash.com/photo-1678951598862-013dc02df4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
  },
  {
    name: 'Aarhus, Denmark',
    link: 'https://images.unsplash.com/photo-1678973788045-b7eb6ae7de08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
];

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClose(popup);
}

function popupOpenProfile() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popupOpen(popup);
}

function popupOpen(popupForm) {
  popupForm.classList.add('popup_opened');
}

function popupClose(popupForm) {
  popupForm.classList.remove('popup_opened');
}

closePopupButton.addEventListener('click', function() {
  popupClose(popup);
});

profileEditButton.addEventListener('click', function() {
  popupOpenProfile();
});

formElement.addEventListener('submit', handleFormSubmit);

addButtonPhoto.addEventListener('click', function() {
  popupOpen(addPopupPhoto);
});

closePopupAddPhotoButton.addEventListener('click', function() {
  popupClose(addPopupPhoto);

  nameImage.value = '';
  linkImage.value = '';
});

function createCard(card) {
  const template = templateCard.querySelector('.list-photo__card').cloneNode(true);
  const imageCard = template.querySelector('.list-photo__image');
  const titleCard = template.querySelector('.list-photo__title');
  const cardDelete = template.querySelector('.list-photo__delete-button');

  imageCard.addEventListener('click', function(evt) {
    const titleCard = evt.target.closest('.list-photo__card').querySelector('.list-photo__title').textContent;
    const altCard = evt.target.getAttribute('alt');
    openImage.src = ('src', evt.target.src);
    openTitle.textContent = titleCard;
    openImage.setAttribute('alt', altCard);
    popupOpen(openPhotoPopup);
  });

  imageCard.setAttribute('src', card.link);
  imageCard.setAttribute('alt', card.alt);
  titleCard.textContent = card.name;

  template.querySelector('.list-photo__like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('list-photo__like_active');
  });

  cardDelete.addEventListener('click', (evt) => evt.target.closest('.list-photo__card').remove());

  return template;
}

function renderInitialCards(card, listCards) {
  const templateCard = createCard(card);
  listCards.prepend(templateCard);
}

function handleFormSubmitCard(evt) {
  evt.preventDefault();
  const nameValue = nameImage.value;
  const linkValue = linkImage.value;
  const newCards = {
    name: nameValue,
    link: linkValue,
    alt: nameValue
  };
  addFormCard.reset();
  popupClose(addPopupPhoto);
  renderInitialCards(newCards, listCards);
}

closePopupCardButton.addEventListener('click', function() {
  popupClose(openPhotoPopup);
});

initialCards.forEach(function(card) {
  const elementCard = createCard(card);
  listCards.appendChild(elementCard);
});

addFormCard.addEventListener('submit', handleFormSubmitCard);
