export default class Card {
    constructor({data, handleClickImage}, templateSelector) {
        this._name = data.name
        this._link = data.link
        this._handleClickImage = handleClickImage
        this._templateSelector = templateSelector
    }

    //метод переключающий кнопку лайк
    _toggleLikeState(evt) {
        evt.target.classList.toggle('card__like_active')
    }

    //метод удаления карточки
    _removeCard(evt) {
        evt.target.closest('.card').remove();
    }

    //установка слушателей на карточку
    _setEventListeners() {
        this._item.querySelector('.card__delete').addEventListener('click', this._removeCard)
        this._item.querySelector('.card__like').addEventListener('click', this._toggleLikeState)
        this._item.querySelector('.card__image').addEventListener('click', () => this._handleClickImage(this._name, this._link))
    }

    //получение темплейта и клонирование
    _getTemplateElement() {
        return document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true)
    }

    //создание карточки
    createCard() {
        this._item = this._getTemplateElement()
        const image = this._item.querySelector('.card__image')
        this._setEventListeners()

        image.src = this._link
        image.alt = this._name
        this._item.querySelector('.card__title').textContent = this._name

        return this._item
    }
}