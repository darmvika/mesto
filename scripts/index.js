const openPopupBtn = document.querySelector('.profile__button-redact');
const popup = document.querySelector('.popup');
const btnClose = document.querySelector('.popup__but-close');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const formElement = document.querySelector('.popup__inputs');
const BtnPlus = document.querySelector('.profile__button-plus');
const cardPopup = document.querySelector('.popup_card');
const elementTemplate = document.getElementById('element-template');
const elementContainer = document.querySelector('.group')
const closePopupNewMesto = document.querySelector('.popup__but-close_card');
//Попап редактировать профиль

const openPopup = () => {
    popup.classList.toggle('popup_opened')
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

const closePopup = () => {
    popup.classList.remove('popup_opened');
}

const handleFormSubmit = (evt) => {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}


//попап новое место
const openNewPopup = () => {
    cardPopup.classList.toggle('popup_opened');
}

const closeNewPopup = () => {
    cardPopup.classList.remove('popup_opened');
}


// добавление из массива
const createElement = (cardsData) => {
    const cardElement = elementTemplate.content.querySelector('.element').cloneNode(true);

    const elementImg = cardElement.querySelector('.element__img');
    const elementTitle = cardElement.querySelector('.element__title');
    const elementRemove = cardElement.querySelector('.element__remove');
    const elementLike = cardElement.querySelector('.element__like');

    elementTitle.textContent = cardsData.name;
    elementImg.src = cardsData.link;
    elementImg.alt = cardsData.name;


    const handleRemove = (evt) => {
        cardElement.remove();
    };


    const handleLike = (evt) => {
        elementLike.classList.toggle('element__like_active');
    };


    const popupCaption = document.querySelector('.open-card__caption');
    const popupElement = document.querySelector('.popup_opn-card');
    const popupImgs = document.querySelector('.open-card__image');

    function openPopupImg() {
        popupCaption.textContent = cardsData.name;
        popupImgs.src = cardsData.link;
        popupElement.classList.add("popup_opened");
    }

    elementImg.addEventListener('click', openPopupImg);


    const cardClose = document.querySelector('.popup__but-close_open-card');

    const closeCard = () => {
        popupElement.classList.remove('popup_opened');
    }

    cardClose.addEventListener('click', closeCard)

    elementRemove.addEventListener('click', handleRemove);
    elementLike.addEventListener('click', handleLike);

    return cardElement;



};

initialCards.forEach((card) => {
    const element = createElement(card);
    elementContainer.appendChild(element);

});









btnClose.addEventListener('click', closePopup);
openPopupBtn.addEventListener('click', openPopup);

BtnPlus.addEventListener('click', openNewPopup);
closePopupNewMesto.addEventListener('click', closeNewPopup);