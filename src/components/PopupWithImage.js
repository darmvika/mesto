import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popup.querySelector('.card__image');
        this._imagePopupCaption = this._popup.querySelector('.card__caption')
    }

    open = (cardData) => {
        this._popupImage.src = cardData.link;
        this._popupImage.alt = `Изображение ${this.name}`;
        this._imagePopupCaption.textContent = cardData.name;
        super.open()
    }
}