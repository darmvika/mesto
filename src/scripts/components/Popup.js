export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._popupCloseButton = this._popup.querySelector('.popup__close')
        this._form = this._popup.querySelector('.popup__inputs');
    }

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close()
        }
    }

    _hendleCloseButton = () => {
        this.close()
    }

    _handleClickbyOverley = (evt) => {
        if (evt.target === evt.currentTarget) {
            this.close()
        }
    }

    setEventListeners() {
        this._popupCloseButton.addEventListener('click', this._hendleCloseButton);
        this._popup.addEventListener('click', this._handleClickbyOverley)
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose)
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }
}