export default class Card {
    constructor({data, handleClickImage}, templateSelector) {
        this._name = data.name
        this._link = data.link
        this._handleClickImage = handleClickImage
        this._templateSelector = templateSelector
    }

    _toggleLikeState(evt) {
        evt.target.classList.toggle('card__like_active')
    }

    _deleteCard(evt) {
        evt.target.closest('.card').remove();
    };

    _setEventListeners() {
        this._item.querySelector('.card__delete').addEventListener('click', this._deleteCard)
        this._item.querySelector('.card__like').addEventListener('click', this._toggleLikeState)
        this._image.addEventListener('click', () => this._handleClickImage(this._name, this._link))
    }

    _getTemplateElement() {
        return document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true)
    }

    createCard() {
        this._item = this._getTemplateElement()
        this._image = this._item.querySelector('.card__image')
        this._setEventListeners()

        this._image.src = this._link
        this._image.alt = this._name
        this._item.querySelector('.card__title').textContent = this._name

        return this._item
    }

}