const initialCards = [
    {
        title: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        title: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        title: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        title: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        title: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        title: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
]; 


const buttonRedact = document.querySelector('.profile__redact')
const buttonPlus = document.querySelector('.profile__plus')

const formProfile = document.querySelector('.popup__inputs_profile');
const formCards = document.querySelector('.popup__inputs_new-card');
const formAvatar = document.querySelector('.popup__inputs_avatar')

const selectorTemplate = '#element-template';
const popupCardSelector = '.popup_card'
const listsElementSelector = '.group';
const popupProfileSelector = '.popup_profile'
const popupNewCardSelector = '.popup_new-card';
const popupAvatarSelector = '.popup_update-avatar'
const popupDeleteSelector = '.popup_confirm'


const configInfo = {
    profilenameSelector: '.profile__title',
    profileJobSelector: '.profile__subtitle',
    profileAvatarSelector: '.profile__avatar'
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

export {
    initialCards,
    buttonRedact,
    buttonPlus,
    formProfile,
    formCards,
    formAvatar,
    selectorTemplate,
    popupCardSelector,
    popupAvatarSelector,
    popupDeleteSelector,
    listsElementSelector,
    popupProfileSelector,
    popupNewCardSelector,
    configInfo,
    config
}


