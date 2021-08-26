const popup = document.querySelector('.popup');
const editBtn = document.querySelector('.profile__edit-button');
const closeBtn = document.querySelector('.popup__close-image');
const form = document.querySelector('.popup__form');
const titlePopup = document.edit_profile['popup-title'];
const subtitlePopup = document.edit_profile['popup-subtitle'];
const profileTitleContent = document.querySelector('.profile__title');
const profileSubtitleContent = document.querySelector('.profile__subtitle');
const cardElement = document.querySelector('.card')
const cardTemplate = document.querySelector('.card_template').content
const cardsContainer = document.querySelector('.cards')

function openPopup() {
    titlePopup.value = profileTitleContent.textContent;
    subtitlePopup.value = profileSubtitleContent.textContent;
    popup.classList.add('popup_active');
}

function closePopup() {
    popup.classList.remove('popup_active');
}

function submitPopup(evt) {
    evt.preventDefault();
    profileTitleContent.textContent = titlePopup.value;
    profileSubtitleContent.textContent = subtitlePopup.value;
    closePopup();
}

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
initialCards.forEach(function (element) {
    const cardElement = cardTemplate.cloneNode(true);

    cardElement.querySelector('.card__title').textContent = element.name;
    cardElement.querySelector('.card__image').src = element.link;

    cardsContainer.append(cardElement)
})

form.addEventListener('submit', submitPopup);
editBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
