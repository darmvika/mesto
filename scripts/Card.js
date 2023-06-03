export default class Card{ 
    constructor(cardsData, selectorTemplate, openPopupCard){
        this._cardsData = cardsData;
        this._link = cardsData.link;
        this._name = cardsData.name;
        this._selectorTemplate = selectorTemplate;
        this._openPopupCard = openPopupCard;
    }
    _getTemplateClone(){
        return document.querySelector(this._selectorTemplate).content.querySelector('.element').cloneNode(true);
    }

    _handleLike = () => {
        this._likeIconElement.classList.toggle('element__like_active');
    }

    _handleDeleteElement = () => {
        this._cloneElement.remove();
    }

    _handleOpenCardPopup = () => {
        this._openPopupCard(this._cardsData)
    }

    _setEventListener(){
        this._likeIconElement.addEventListener('click',this._handleLike );
        this._removeElement.addEventListener('click', this._handleDeleteElement)
        this._imageElement.addEventListener('click', this._handleOpenCardPopup)
    }


    createCard() {
        this._cloneElement = this._getTemplateClone();
        this._imageElement = this._cloneElement.querySelector('.element__img')
        this._likeIconElement = this._cloneElement.querySelector('.element__like');
        this._removeElement= this._cloneElement.querySelector('.element__remove');
        this._subTitle = this._cloneElement.querySelector('.element__title');
        this._imageElement.src = this._link;
        this._imageElement.alt = this._name;
        this._subTitle.textContent = this._name;
        this._setEventListener()
        return  this._cloneElement ;
    }
}