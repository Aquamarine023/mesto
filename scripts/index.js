//кнопки
const addBtn = document.querySelector('.profile__add-button')
const editBtn = document.querySelector('.profile__edit-button')
const closeBtn = document.querySelectorAll('.popup__close-button')

//формы
const popup = document.querySelector('.popup')
const editForm = document.querySelector('.popup_edit-form')
const cardForm = document.querySelector('.popup_add-form')
const popupAddCard = document.getElementById('add_mesto')
const openFullScreenForm = document.querySelector('.popup_fullscreen')

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

function openPopup(popup) {
    popup.classList.add('popup_active');
}

function openProfilePopup() {
    openPopup(editForm);
    namePopup.value = profileNameContent.textContent
    jobPopup.value = profileJobContent.textContent
}

//функция закрытия попапа
const closePopup = (popop) => {
    popop.classList.remove('popup_active')
}

//функция открытия карточки на полный экран
const fullScreenImage = (evt) => {
    openPopup(openFullScreenForm)
    document.querySelector('.popup__image').src = evt.target.closest('.card__image').src
    document.querySelector('.popup__description').textContent = evt.target.closest('.card').textContent
    document.querySelector('.popup__image').alt = evt.target.closest('.card').textContent.trim()
}

//функция закрытия формы добавления места
function submitPopupMesto(evt) {
    const saveButton = document.add_mesto['save']
    evt.preventDefault()
    createCard({
        name: addMestoName.value,
        link: addMestoLink.value
    })
    popupAddCard.reset()
    closePopup(cardForm)
    saveButton.setAttribute('disabled', true);
    saveButton.classList.add('popup__save-button_inactive');


}

//функция подтверждения изменений в редактировнии профиля
const submitPopupProfile = (evt) => {
    evt.preventDefault();
    profileNameContent.textContent = namePopup.value
    profileJobContent.textContent = jobPopup.value
    closePopup(editForm);
}

//функция удаления карточек
const deleteCard = (evt) => {
    evt.target.closest('.card').remove();
};

//функция лайков
const addLike = (evt) => {
    evt.target.classList.toggle('card__like_active')
}

//возврат разметки карточки
const addCard = (element) => {
    const cardElement = elementTemplate.cloneNode(true)

    cardElement.querySelector('.card__title').textContent = element.name
    cardElement.querySelector('.card__image').src = element.link
    cardElement.querySelector('.card__image').alt = element.name
    cardElement.querySelector('.card__delete').addEventListener('click', deleteCard)
    cardElement.querySelector('.card__like').addEventListener('click', addLike)
    cardElement.querySelector('.card__image').addEventListener('click', fullScreenImage)
    return cardElement
}

//добавление карточек в контейнер
const createCard = (element) => {
    cardsContainer.prepend(addCard(element))
}

//создание карточек
initialCards.forEach((element) => {
    createCard(element)
})

const handleCloseOverlay = (evt) => {
    if (evt.target.classList.contains('popup')) {
        closePopup(evt.target)
    }
}

document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
        closePopup(editForm)
        closePopup(cardForm)
        closePopup(openFullScreenForm)
    }
})

//ивенты
editForm.addEventListener('click', handleCloseOverlay)
cardForm.addEventListener('click', handleCloseOverlay)
openFullScreenForm.addEventListener('click', handleCloseOverlay)
editForm.addEventListener('submit', submitPopupProfile)
cardForm.addEventListener('submit', submitPopupMesto)
editBtn.addEventListener('click', openProfilePopup)
addBtn.addEventListener('click', () => {
    openPopup(cardForm)})
closeBtn.forEach((element) => {
        element.addEventListener('click', (evt) => {
            closePopup(evt.target.closest('.popup'));
        });
})
