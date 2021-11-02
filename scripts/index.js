import Card from "./Card.js"
import FormValidator from "./FormValidator.js";
//кнопки
const addBtn = document.querySelector('.profile__add-button')
const editBtn = document.querySelector('.profile__edit-button')
const closeBtns = document.querySelectorAll('.popup__close-button')
const saveButton = document.add_mesto['save']

//формы
const popup = document.querySelector('.popup')
const editForm = document.querySelector('.popup_edit-form')
const cardForm = document.querySelector('.popup_add-form')
const popupAddCard = document.getElementById('add_mesto')
const openFullScreenForm = document.querySelector('.popup_fullscreen')
const editProfileForm = document.forms["edit_profile"]
const addMestoForm = document.forms["add_mesto"]

//инпуты
const namePopup = document.edit_profile['popup-name']
const jobPopup = document.edit_profile['popup-job']
const addMestoName = document.add_mesto['add-mesto_title']
const addMestoLink = document.add_mesto['add-mesto_link']

//профиль
const profileNameContent = document.querySelector('.profile__title')
const profileJobContent = document.querySelector('.profile__subtitle')

//темплейт
const elementTemplate = document.querySelector('.card_template').content.querySelector('.card')
const cardsContainer = document.querySelector('.cards')

const popupImage = document.querySelector('.popup__image')
const popupDescription = document.querySelector('.popup__description')

//массивы
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

const validationFormConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
}

const formValidatorEditForm = new FormValidator(validationFormConfig, editProfileForm)
const formValidatorAddForm = new FormValidator(validationFormConfig, addMestoForm)


const closePopupEsc = (evt) => {
    if (evt.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_active')
        closePopup(popupOpened)

    }
}

function openPopup(popup) {
    popup.classList.add('popup_active');
    document.addEventListener('keydown', closePopupEsc)
}

function openProfilePopup() {
    openPopup(editForm);
    namePopup.value = profileNameContent.textContent
    jobPopup.value = profileJobContent.textContent
}

//функция закрытия попапа
const closePopup = (popop) => {
    popop.classList.remove('popup_active')
    document.removeEventListener('keydown', closePopupEsc)
}

//функция открытия карточки на полный экран
function fullScreenImage(name, link) {
    popupImage.src = link
    popupImage.alt = name
    popupDescription.textContent = name
    openPopup(openFullScreenForm)

}

//функция подтверждения изменений в редактировнии профиля
const submitPopupProfile = (evt) => {
    evt.preventDefault();
    profileNameContent.textContent = namePopup.value
    profileJobContent.textContent = jobPopup.value
    closePopup(editForm);
}

//добавление карточек в контейнер
function createCard(element) {
    const card = new Card(element, fullScreenImage, '.card_template')
    return card.createCard()
}

const submitPopupMesto = (evt) => {
    evt.preventDefault()
    const newData = {
        name: addMestoName.value,
        link: addMestoLink.value
    }

    cardsContainer.prepend(createCard(newData))
    popupAddCard.reset()
    closePopup(cardForm)
    saveButton.setAttribute('disabled', true);
    saveButton.classList.add('popup__save-button_inactive');
}

//создание карточек
initialCards.forEach((item) => {
    cardsContainer.prepend(createCard(item))
})

const handleCloseOverlay = (evt) => {
    if (evt.target.classList.contains('popup')) {
        closePopup(evt.target)
    }
}

formValidatorAddForm.enableValidation()
formValidatorEditForm.enableValidation()

//ивенты
editForm.addEventListener('mousedown', handleCloseOverlay)
cardForm.addEventListener('mousedown', handleCloseOverlay)
openFullScreenForm.addEventListener('mousedown', handleCloseOverlay)
editForm.addEventListener('submit', submitPopupProfile)
cardForm.addEventListener('submit', submitPopupMesto)
editBtn.addEventListener('click', openProfilePopup)
addBtn.addEventListener('click', () => {
    openPopup(cardForm)
})
closeBtns.forEach((element) => {
    element.addEventListener('click', (evt) => {
        closePopup(evt.target.closest('.popup'));
    });
})
