import './pages/index.css'

import Card from './scripts/components/Card.js';
import FormValidator from './scripts/components/validate.js';
import PopupWithImage from './scripts/components/PopupWithImage.js';
import Section from './scripts/components/Section.js';
import UserInfo from './scripts/components/UserInfo.js';
import PopupWithForm from './scripts/components/PopupWithForm.js';
import {
    initialCards,
    buttonRedact,
    buttonPlus,
    formProfile,
    formCards,
    selectorTemplate,
    popupCardSelector,
    listsElementSelector,
    popupProfileSelector,
    popupNewCardSelector,
    configInfo,
    config
} from './scripts/utils/constants.js'


//создаем экземпляр класса FormValidator для попапа редактирования и запускаем валидации
const formProfileInfoValidator = new FormValidator(config, formProfile);
formProfileInfoValidator.enableValidation();

//создаем экземпляр класса FormValidator для попапа добавления карточки и запускаем валидации
const formAddCardValidator = new FormValidator(config, formCards);
formAddCardValidator.enableValidation();


const userInfo = new UserInfo(configInfo);

const popupImage = new PopupWithImage(popupCardSelector);




// карточка
const section = new Section({
    items: initialCards,
    renderer: (element) => {
        const card = new Card(element, selectorTemplate, popupImage.open);
        return card.createCard()
    }
}, listsElementSelector)

section.addCardFromArray()


//попап редактировать профиль
const popupProfile = new PopupWithForm(popupProfileSelector, (evt) => {
    evt.preventDefault();
    userInfo.setUserInfo(popupProfile.getInputValues())
    popupProfile.close();
})

buttonRedact.addEventListener('click', () => {
    popupProfile.setInputValues(userInfo.getUserInfo());
    popupProfile.open();
});


buttonRedact.addEventListener('click', () => {
    popupProfile.open()
})



// Добавление новой карточки

const popapAddCard = new PopupWithForm(popupNewCardSelector, (evt) => {
    evt.preventDefault();
    section.addItem(section.renderer(popapAddCard.getInputValues()))
    popapAddCard.close()
})

buttonPlus.addEventListener('click', () => {
    popapAddCard.open()
})




popupProfile.setEventListeners() //открытие редактировать профиль
popapAddCard.setEventListeners() //открытие добавить карточку
popupImage.setEventListeners() //открытие карточки
