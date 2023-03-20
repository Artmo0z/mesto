const profileEditButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');

const nameInput = document.querySelector('.popup__input_name_value');
const jobInput = document.querySelector('.popup__input_job_value');

const popup = document.querySelector('.popup');
const formElement = popup.querySelector('.popup__form');

const closePopupButton = popup.querySelector('.popup__close');

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

const addPopupPhoto = document.querySelector('.popup_addPhoto');
const addButtonPhoto = document.querySelector('.profile__add-button');
const closePopupAddPhotoButton = addPopupPhoto.querySelector('.popup__close-addphoto');

const listCards = document.querySelector('.list-photo');

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

addButtonPhoto.addEventListener('click', function() {
  popupOpen(addPopupPhoto);
});

closePopupAddPhotoButton.addEventListener('click', function() {
  popupClose(addPopupPhoto);
});

function createCards(card) {
  const templateCard = document.querySelector('#card-template').content.cloneNode(true);
  const imageCard = templateCard.querySelector('.list-photo__image');
  const titleCard = templateCard.querySelector('.list-photo__title');
  const cardDelete = templateCard.querySelector('.list-photo__delete-button');

  const openPhotoPopup = document.querySelector('.popup_open-cards');
  const openImage = document.querySelector('.popup__open-image');
  const openTitle = document.querySelector('.popup__open-title');
  const closePopupCardsButton = openPhotoPopup.querySelector('.popup__close-open-cards');

  listCards.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('list-photo__image')) {
      const titleCard = evt.target.closest('.list-photo__card').querySelector('.list-photo__title').textContent;
      openImage.src = evt.target.src
      openTitle.textContent = titleCard;
      popupOpen(openPhotoPopup);
    }
  });

  closePopupCardsButton.addEventListener('click', function() {
    popupClose(openPhotoPopup);
  });

  imageCard.setAttribute('src', card.link);
  titleCard.textContent = card.name;

  templateCard.querySelector('.list-photo__like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('list-photo__like_active');
  });

  cardDelete.addEventListener('click', (evt) => evt.target.closest('.list-photo__card').remove());

  return templateCard;
}

function renderCards(card, listCards) {
  const templateCard = createCards(card);
  listCards.prepend(templateCard);
}

initialCards.forEach(function(card) {
  const elementCard = createCards(card);
  listCards.appendChild(elementCard);
});

const addFormCard = document.querySelector('.popup__form-cards');
const nameImage = addFormCard.querySelector('.popup__input_name_image');
const linkImage = addFormCard.querySelector('.popup__input_link_image');

function handleFormSubmitCard(evt) {
  evt.preventDefault();
  const nameValue = nameImage.value;
  const linkValue = linkImage.value;
  const newCards = {
    name: nameValue,
    link: linkValue
  };
  addFormCard.reset();
  popupClose(addPopupPhoto);
  renderCards(newCards, listCards);
}

addFormCard.addEventListener('submit', handleFormSubmitCard);