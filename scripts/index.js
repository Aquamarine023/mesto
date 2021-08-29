//кнопки
const editBtn = document.querySelector('.profile__edit-button');
const addBtn = document.querySelector('.profile__add-button');
const closeBtn = document.querySelector('.popup__close-button');

//попап
const popup = document.querySelector('.popup');
const form = document.querySelector('.popup__form');
const titlePopup = document.edit_profile['popup-name'];
const subtitlePopup = document.edit_profile['popup-job'];
const profileTitleContent = document.querySelector('.profile__title');
const profileSubtitleContent = document.querySelector('.profile__subtitle');

//фукция редактирования попапа с информацией профиля
function openPopup() {
    titlePopup.value = profileTitleContent.textContent;
    subtitlePopup.value = profileSubtitleContent.textContent;
    popup.classList.add('popup_active');
}

//фукция закрытия попапа с информацией профиля
function closePopup() {
    popup.classList.remove('popup_active');
}

function submitPopup(evt) {
    evt.preventDefault();
    profileTitleContent.textContent = titlePopup.value;
    profileSubtitleContent.textContent = subtitlePopup.value;
    closePopup();
}

//массив
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

//карточки
const cardTemplate = document.querySelector('.card_template').content
const cardsContainer = document.querySelector('.cards')

//изначально добавленные карточки
initialCards.forEach(function (element) {
    const cardElement = cardTemplate.cloneNode(true);

    cardElement.querySelector('.card__title').textContent = element.name;
    cardElement.querySelector('.card__image').src = element.link;

    cardsContainer.append(cardElement)
})

form.addEventListener('submit', submitPopup);
editBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
