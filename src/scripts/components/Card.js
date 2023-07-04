export default class Card {
  constructor(cardData, selectorTemplate, openPopupCard, openDeletePopup, changeLike) {
    this._cardData = cardData;
    this._link = cardData.link;
    this._name = cardData.name;
    this._myId = cardData.myId;
    this._ownerId = cardData.owner._id;
    this._cardId = cardData._id;
    this._selectorTemplate = selectorTemplate;
    this._likes = cardData.likes; 
    this._likesLength = cardData.likes.length; 
    this._changeLike = changeLike; 
    this._isLiked = false;
    this._openPopupCard = openPopupCard;
    this._openDeletePopup = openDeletePopup;
    this._cloneElement = this._getTemplateClone();
    this._imageElement = this._cloneElement.querySelector('.element__img')
    this._likeIconElement = this._cloneElement.querySelector('.element__like');
    this._removeElement = this._cloneElement.querySelector('.element__remove');
    this._subTitle = this._cloneElement.querySelector('.element__title');
    this._counter = this._cloneElement.querySelector('.element__number') 
  }

  _getTemplateClone() {
    return document.querySelector(this._selectorTemplate).content.querySelector('.element').cloneNode(true);
  }

  _handleLike = () => {
    this._changeLike(this._isLiked, this._cardId)
  }

  _handleDeleteElement = () => {
    this._openDeletePopup({ card: this, cardId: this._cardId });
  }

  _handleOpenCardPopup = () => {
    this._openPopupCard(this._cardData)
  }

  _setEventListener() {
    this._likeIconElement.addEventListener('click', this._handleLike);
    this._removeElement.addEventListener('click', this._handleDeleteElement)
    this._imageElement.addEventListener('click', this._handleOpenCardPopup)
  }

  _changeVisibleForRemoveButton() {
    this._myId === this._ownerId ? this._removeElement.style.display = 'block' : this._removeElement.style.display = 'none'
  }

  _checkLikeStatus() {
    this._likes.forEach(item => {
      if (item._id === this._myId) {
        this._likeIconElement.classList.add('element__like_active');
        this._isLiked = true;
        return
      }
    })
    this._counter.textContent = this._likesLength
  }

  toggelLike(likes) {
    this._likeIconElement.classList.toggle('element__like_active');
    this._counter.textContent = likes.length;
    this._isLiked =! this._isLiked;
  }

  removeCard() {
    this._cloneElement.remove();
    this._cloneElement = null;
  }

  createCard() {
    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    this._subTitle.textContent = this._name;
    this._checkLikeStatus() 
    this._changeVisibleForRemoveButton()
    this._setEventListener()
    return this._cloneElement;
  }
}