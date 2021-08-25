const popup = document.querySelector('.popup');
const editBtn = document.querySelector('.profile__edit-button');
const closeBtn = document.querySelector('.popup__close-image');
const form = document.querySelector('.popup__form');
const titlePopup = document.edit_profile['popup-title'];
const subtitlePopup = document.edit_profile['popup-subtitle'];
const profileTitleContent = document.querySelector('.profile__title');
const profileSubtitleContent = document.querySelector('.profile__subtitle');

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

form.addEventListener('submit', submitPopup);
editBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
