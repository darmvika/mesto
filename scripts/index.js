import initialCards from './constants.js'
import Card from './Card.js';
import FormValidator from './validate.js';

const selectorTemplate = '#element-template';
const elementContainer = document.querySelector('.group')
const listsElement = document.querySelector('.element')


const popupList = Array.from(document.querySelectorAll('.popup'));
const popupProfile = document.querySelector('.popup_profile')
const buttonRedact = document.querySelector('.profile__redact')
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const formProfile = document.querySelector('.popup__form_profile');

const newCard = document.querySelector('.popup_new-card');
const buttonPlus = document.querySelector('.profile__plus')
const formCards = document.querySelector('.popup__form_new-card')
const namedCardInput = document.querySelector('.popup__input_type_named');
const linkCardInput = document.querySelector('.popup__input_type_link');

const popupCard = document.querySelector('.popup_card')
const popupCaption = document.querySelector('.card__caption');
const popupImgs = document.querySelector('.card__image');

const validationConfig = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input", 
    errorSelectorTemplate: ".popup__span-error", 
    submitButtonSelector: ".popup__save",
    disabledButtonClass: "popup__save_invalid", 
    inputErrorClass: "popup__input_invalid", 
    textErrorClass: "popup__span-error_visible", 
};


//создаем экземпляр класса FormValidator для попапа редактирования и запускаем валидации
const formProfileInfoValidator = new FormValidator(validationConfig, formProfile);
formProfileInfoValidator.enableValidation();

//создаем экземпляр класса FormValidator для попапа добавления карточки и запускаем валидации
const formAddCardValidator = new FormValidator(validationConfig, formCards);
formAddCardValidator.enableValidation();







//закртыие на оверлей
const handlePopupClose = (evt) => {
    const isOverlay = evt.target.classList.contains('popup');
    const isCloseBtn = evt.target.classList.contains('popup__close');

    if (isOverlay || isCloseBtn) {
        popupList.forEach(closePopup);
    }
};


// закртыие на кнопку эскейп
const closePressTheEsc = (evt) => {
    if (evt.key === 'Escape') {
        popupList.forEach(closePopup);
    }
}

const openPopup = (popupElement) => {
    popupElement.classList.add('popup_opened');
    document.addEventListener('click', handlePopupClose);
    document.addEventListener('keydown', closePressTheEsc);
}

const closePopup = (popupElement) => {
    popupElement.classList.remove('popup_opened');
    document.removeEventListener('click', handlePopupClose);
    document.removeEventListener('keydown', closePressTheEsc);
}

//попап с открытием карты
const openPopupCard = (cardsData) => {
    popupCaption.textContent = cardsData.name;
    popupImgs.src = cardsData.link;
    popupImgs.alt = cardsData.name;
    openPopup(popupCard);
}



//функция с открытием карточки
function createNewCard(card) {
    const element = new Card(card, selectorTemplate, openPopupCard);
    const cardElement = element.createCard()
    return cardElement
}


const renderCards = (container, card) => {
    elementContainer.prepend(card)

}

initialCards.forEach(card => {
    renderCards(listsElement, createNewCard(card));
});



//popup PROFILE

const popupProfileOpen = () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    openPopup(popupProfile)
}


const profileFormSubmit = (evt) => {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupProfile);
}



//popup с добавлением карточки

const newCardOpen = () => {
    openPopup(newCard)
}



// Добавление новой карточки

formCards.addEventListener('submit', (evt) => {
evt.preventDefault();
const cardDataNameUrl = {name: namedCardInput.value, link: linkCardInput.value};
renderCards(listsElement, createNewCard(cardDataNameUrl))
closePopup(newCard)
evt.target.reset()
})




buttonPlus.addEventListener('click', newCardOpen)
buttonRedact.addEventListener('click', popupProfileOpen)
formProfile.addEventListener('submit', profileFormSubmit);
// formCards.addEventListener('submit', newCardBlock)









