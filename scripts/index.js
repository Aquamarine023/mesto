//кнопки
const addBtn = document.querySelector('.profile__add-button')
const editBtn = document.querySelector('.profile__edit-button')
const closeBtn = document.querySelectorAll('.popup__close-button')

//формы
const editForm = document.querySelector('.popup_edit-form')
const addForm = document.querySelector('.popup_add-form')
const openFullScreenForm = document.querySelector('.popup_fullscreen')

//инпуты форм
const namePopup = document.edit_profile['popup-name']
const jobPopup = document.edit_profile['popup-job']
const handleAddMestoName = document.add_mesto['add-mesto_title']
const handleAddMestoLink = document.add_mesto['add-mesto_link']

//профиль пользоватея
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

//функция открытия формы редактирования профиля
const openPopupProfile = () => {
    namePopup.value = profileNameContent.textContent
    jobPopup.value = profileJobContent.textContent
    editForm.classList.add('popup_active');
}

//функция закрытия формы редактирования профиля
const closePopupProfile = () => {
    editForm.classList.remove('popup_active')
}

//функция открытия формы добавления места
const openPopupMesto = () => {
    addForm.classList.add('popup_active')
}

//функция закрытия формы добавления места
const closePopupMesto = () => {
    addForm.classList.remove('popup_active')
}

//функция открытия карточки на полный экран
const fullScreenImage = (evt) => {
    openFullScreenForm.classList.add('popup_active')
    document.querySelector('.popup__image').src = evt.target.closest('.card__image').src
    document.querySelector('.popup__description').textContent = evt.target.closest('.card').textContent
    document.querySelector('.popup__image').alt = evt.target.closest('.card').textContent.trim()
}

//функция закрытия карточки на полный экран
const closePopupFullScreen = () => {
    openFullScreenForm.classList.remove('popup_active')
}

//функция закрытия формы добавления места
function submitPopupMesto(evt) {
    evt.preventDefault()
    createCards({
        name: handleAddMestoName.value,
        link: handleAddMestoLink.value
    })

    document.add_mesto.reset()
    closePopupMesto()
}

//функция подтверждения изменений в редактировнии профиля
const submitPopupProfile = (evt) => {
    evt.preventDefault();
    profileNameContent.textContent = namePopup.value
    profileJobContent.textContent = jobPopup.value
    closePopupProfile();
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
const createCards = (element) => {
    cardsContainer.prepend(addCard(element))
}

//создание карточек
initialCards.forEach((element) => {
    createCards(element)
})

//ивенты
editForm.addEventListener('submit', submitPopupProfile)
addForm.addEventListener('submit', submitPopupMesto)
editBtn.addEventListener('click', openPopupProfile)
addBtn.addEventListener('click', openPopupMesto)
closeBtn.forEach((element) => {
    element.addEventListener('click', () =>{
        document.querySelectorAll('.popup').forEach((element) => {
            element.classList.remove('popup_active')})
    })
})
