import './index.css'

import {
    addBtn,
    editBtn,
    modalEditForm,
    modalAddForm,
    modalFullScreenForm,
    profileFormSelector,
    newMestoFormSelector,
    imagePopupFullScreen,
    textPopupFullScreen,
    templateSelector,
    namePopup,
    jobPopup,
    profileNameSelector,
    profileJobSelector,
    cardsContainer,
    initialCards,
    validationFormConfig,
    profileNameContent,
    profileJobContent
} from "../utils/constant.js";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";


//создание валидации
const formValidatorEditForm = new FormValidator(validationFormConfig, profileFormSelector)
const formValidatorAddForm = new FormValidator(validationFormConfig, newMestoFormSelector)


const addInfoProfileForm = new UserInfo({
    userName: profileNameSelector,
    userInfo: profileJobSelector
});


const popupImage = new PopupWithImage(
    modalFullScreenForm,
    imagePopupFullScreen,
    textPopupFullScreen)

popupImage.setEventListeners()

//создание карточки из массива
function createCard(item) {
    const card = new Card({
            data: item,
            handleClickImage: () => {
                popupImage.open(item.name, item.link)
            },
        },
        templateSelector);
    return card.createCard();
}

//вставка карточек в разметку
const defaultCards = new Section({
        items: initialCards,
        renderer: (item) => {
            defaultCards.addItem(createCard(item))
        }
    },
    cardsContainer
)

//отрисовка карточек
defaultCards.renderItem()


const openModalAddForm = new PopupWithForm({
    popupSelector: modalAddForm,
    submitForm: (item) => {
        defaultCards.addItem(createCard(item))
    }
})

openModalAddForm.setEventListeners()


const openModalAddPopup = () => {
    formValidatorAddForm.resetValidation()
    openModalAddForm.open()
}


const openModalEditForm = new PopupWithForm({
    popupSelector: modalEditForm,
    submitForm: (item) => {
        addInfoProfileForm.setUserInfo(item)
    }
})

openModalEditForm.setEventListeners()

//открытие формы редактирования профиля
const openModalEditPopup = () => {
    const userData = addInfoProfileForm.getUserInfo()

    jobPopup.value = userData.userInfo
    namePopup.value = userData.userName

    openModalEditForm.open()
}

editBtn.addEventListener('click', openModalEditPopup)
addBtn.addEventListener('click', openModalAddPopup)

formValidatorAddForm.enableValidation()
formValidatorEditForm.enableValidation()