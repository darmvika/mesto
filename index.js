import initialCards from './src/utils/constants.js'
import Card from './src/components/Card.js';
import FormValidator from './src/components/validate.js';
import PopupWithImage from './src/components/PopupWithImage.js';
import Section from './src/components/Section.js';
import UserInfo from './src/components/UserInfo.js';
import PopupWithForm from './src/components/PopupWithForm.js';



const selectorTemplate = '#element-template';
const elementContainer = document.querySelector('.group')
const listsElement = document.querySelector('.element')




const buttonRedact = document.querySelector('.profile__redact')
// const profileName = document.querySelector('.profile__title');
// const profileJob = document.querySelector('.profile__subtitle');
// const nameInput = document.querySelector('.popup__input_type_name');
// const jobInput = document.querySelector('.popup__input_type_job');
const formProfile = document.querySelector('.popup__inputs_profile');

const newCard = document.querySelector('.popup_new-card');
const buttonPlus = document.querySelector('.profile__plus')
const formCards = document.querySelector('.popup__inputs_new-card')
const namedCardInput = document.querySelector('.popup__input_type_named');
const linkCardInput = document.querySelector('.popup__input_type_link');




const popupCardSelector = '.popup_card'
const listsElementSelector = '.group';
const popupProfileSelector = '.popup_profile'

const configInfo = {
    profilenameSelector: '.profile__title',
    profileJobSelector: '.profile__subtitle',
}

const config = {
    formSelector: ".popup__inputs",
    inputSelector: ".popup__input",
    errorSelectorTemplate: ".popup__span-error",
    submitButtonSelector: ".popup__save",
    disabledButtonClass: "popup__save_invalid",
    inputErrorClass: "popup__input_invalid",
    textErrorClass: "popup__span-error_visible",
};

const userInfo = new UserInfo(configInfo);





const popupImage = new PopupWithImage(popupCardSelector);
popupImage.setEventListeners()



//создаем экземпляр класса FormValidator для попапа редактирования и запускаем валидации
const formProfileInfoValidator = new FormValidator(config, formProfile);
formProfileInfoValidator.enableValidation();

//создаем экземпляр класса FormValidator для попапа добавления карточки и запускаем валидации
const formAddCardValidator = new FormValidator(config, formCards);
formAddCardValidator.enableValidation();




const section = new Section({
    items: initialCards,
    renderer: (element) => {
        const card = new Card(element, selectorTemplate, popupImage.open);
        return card.createCard()
    }
}, listsElementSelector)

section.addCardFromArray()


const popupProfile = new PopupWithForm(popupProfileSelector, (evt) => {
    evt.preventDefault();
    userInfo.setUserInfo(popupProfile.getInputValues())
    popupProfile.close();
})

buttonRedact.addEventListener('click', () => {
    // formProfileInfoValidator.resetError();
    popupProfile.setInputValues(userInfo.getUserInfo());
    popupProfile.open();
});

popupProfile.setEventListeners()

buttonRedact.addEventListener('click', () => {
    popupProfile.open()
})


//popup PROFILE

// const openPopupProfile = () => {
//     nameInput.value = profileName.textContent;
//     jobInput.value = profileJob.textContent;
// }


// const submitProfileForm = (evt) => {
//     evt.preventDefault();
//     profileName.textContent = nameInput.value;
//     profileJob.textContent = jobInput.value;
//     // closePopup(popupProfile);
// }



// popup с добавлением карточки

// const openNewCard = () => {
//     formCards.reset();
//     formAddCardValidator.resetErrorInput();
// //     openPopup(newCard)
// }



// Добавление новой карточки

formCards.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const cardDataNameUrl = { name: namedCardInput.value, link: linkCardInput.value };
    renderCards(listsElement, createNewCard(cardDataNameUrl))
    evt.target.reset();
    evt.submitter.classList.add('popup__save_invalid')
    evt.submitter.disabled = true;
    closePopup(newCard)
})




// buttonPlus.addEventListener('click', openNewCard)
// buttonRedact.addEventListener('click', openPopupProfile)
// formProfile.addEventListener('submit', submitProfileForm);
// formCards.addEventListener('submit', newCardBlock)









