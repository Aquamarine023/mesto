export const addBtn = document.querySelector('.profile__add-button')
export const editBtn = document.querySelector('.profile__edit-button')

//формы и элементы
export const modalEditForm = document.querySelector('.popup_edit-form')
export const modalAddForm = document.querySelector('.popup_add-form')
export const modalFullScreenForm = document.querySelector('.popup_fullscreen')
export const profileFormSelector = document.forms["edit_profile"]
export const newMestoFormSelector = document.forms["add_mesto"]
export const imagePopupFullScreen = document.querySelector('.popup__image')
export const textPopupFullScreen = document.querySelector('.popup__description')
export const templateSelector = '.card__template'

//инпуты форм
export const namePopup = document.edit_profile['popup-name']
export const jobPopup = document.edit_profile['popup-job']

//профиль пользователя
export const profileNameSelector = '.profile__title'
export const profileJobSelector = '.profile__subtitle'

//контейнер карточек
export const cardsContainer = document.querySelector('.cards')

//массивы
export const initialCards = [
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

export const validationFormConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
}