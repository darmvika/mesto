const elementTemplate = document.getElementById('element-template');
const elementContainer = document.querySelector('.group')
const popup = document.querySelector('.popup')
const popupProfile = document.querySelector('.popup_profile')
const buttonRedact = document.querySelector('.profile__redact')
const buttonCloseProfile = document.querySelector('.popup__close_profile')
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const formProfile = document.querySelector('.popup__inputs_profile');

const newCard = document.querySelector('.popup_new-card');
const buttonPlus = document.querySelector('.profile__plus')
const buttonCloseNewCard = document.querySelector('.popup__close_new-card')
const formCards = document.querySelector('.popup__inputs_new-card')
const namedCardInput = document.querySelector('.popup__input_type_named');
const linkCardInput = document.querySelector('.popup__input_type_link');

function openPopup(popup) {
    popup.classList.add('popup_opened')
}

function closePopup(popup) {
    popup.classList.remove('popup_opened')
}


// добавление из массива
const createElement = (cardsData) => {
    const buttonCloseCard = document.querySelector('.popup__close_card')
    const cardElement = elementTemplate.content.querySelector('.element').cloneNode(true);
    const popupCaption = document.querySelector('.card__caption');
    const popupImgs = document.querySelector('.card__image');
    const popupCard = document.querySelector('.popup_card')


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

    elementRemove.addEventListener('click', handleRemove);
    elementLike.addEventListener('click', handleLike);


    const openPopupCard = () => {
        popupCaption.textContent = cardsData.name;
        popupImgs.src = cardsData.link;
        openPopup(popupCard);
    }

    const closePopupCard = () => {
        closePopup(popupCard)
    }
    


    elementImg.addEventListener('click', openPopupCard)
    buttonCloseCard.addEventListener('click', closePopupCard)

    return cardElement;


};


const renderCards = (cardsElement) => {
    elementContainer.prepend(cardsElement)

}

initialCards.forEach((card) => {
    const element = createElement(card);
    renderCards(element);

});

//popup PROFILE


const popupProfileOpen = () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    openPopup(popupProfile)
}

const popupProfileClose = () => {
    
    closePopup(popupProfile);
}

const profileFormSubmit = (evt) => {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupProfile);
    evt.target .reset()

}


//popup new-card

const newCardOpen = () => {
    openPopup(newCard)
}

const newCardClose = () => {
    closePopup(newCard)
} 


// Добавление новой карточки

const newCardBlock = (evt) => {
    evt.preventDefault();
    const name = namedCardInput.value;
    const link = linkCardInput.value;


    const initialCards = {
        name,
        link,
    };

    renderCards(createElement(initialCards));
    closePopup(newCard)
    evt.target .reset()
    };

buttonPlus.addEventListener('click', newCardOpen)
buttonCloseNewCard.addEventListener('click', newCardClose)
buttonRedact.addEventListener('click', popupProfileOpen)
buttonCloseProfile.addEventListener('click', popupProfileClose)
formProfile.addEventListener('submit', profileFormSubmit);
formCards.addEventListener('submit', newCardBlock)



