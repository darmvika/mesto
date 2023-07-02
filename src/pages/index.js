import './index.css'

import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupDeleteCard from '../scripts/components/PopupDeleteCard.js';
import Api from '../scripts/components/api.js';
import {
  initialCards,
  buttonRedact,
  buttonPlus,
  formProfile,
  formCards,
  formAvatar,
  selectorTemplate,
  popupCardSelector,
  listsElementSelector,
  popupProfileSelector,
  popupNewCardSelector,
  configInfo,
  config
} from '../scripts/utils/constants.js'
import { data } from 'autoprefixer';



const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-69',
  headers: {
    authorization: 'a3a28597-c3b7-480a-a7b8-394d6cff5dbd',
    'Content-Type': 'application/json'
  }
});




const popupAvatarSelector = '.popup_update-avatar'
const popupDeleteSelector = '.popup_confirm'

//создаем экземпляр класса FormValidator для попапа редактирования и запускаем валидации
const formProfileInfoValidator = new FormValidator(config, formProfile);
formProfileInfoValidator.enableValidation();

//создаем экземпляр класса FormValidator для попапа добавления карточки и запускаем валидации
const formAddCardValidator = new FormValidator(config, formCards);
formAddCardValidator.enableValidation();

//форма аватара
const formAvatarValidator = new FormValidator(config, formAvatar);
formAvatarValidator.enableValidation();

const userInfo = new UserInfo(configInfo);

const popupImage = new PopupWithImage(popupCardSelector);

const deletePopupCard = new PopupDeleteCard(popupDeleteSelector, ({ card, cardId }) => {
  api.deleteCard(cardId)
    .then(() => {
      card.removeCard()
      deletePopupCard.close()
    })
    .catch((error) => console.error(`Ошибка при снятии лайка ${error}`))
    .finally()

})

function createNewCard(element) {
  const card = new Card(element, selectorTemplate, popupImage.open, deletePopupCard.open, (likeIconElement, cardId) => {
    if (likeIconElement.classList.contains('element__like_active')) {
      api.deleteLike(cardId)
        .then(res => {
          card.toggelLike(res.likes);
        })
        .catch((error) => console.error(`Ошибка при снятии лайка ${error}`))

    } else {
      api.addLike(cardId)
        .then(res => {
          card.toggelLike(res.likes);
        })
        .catch((error) => console.error(`Ошибка при добавлении лайка ${error}`))

    }
  });
  return card.createCard()
}

// карточка
const section = new Section((element) => {
  section.addItemAppend(createNewCard(element))
}, listsElementSelector)


//попап редактировать профиль
const popupProfile = new PopupWithForm(popupProfileSelector, (data) => {
  api.setUserInfo(data)
    .then(res => {
      userInfo.setUserInfo({ name: res.name, job: res.about, avatar: res.avatar })
    })
    .catch((error) => console.error(`Ошибка при редактировании профиля ${error}`))
    .finally()
})

buttonRedact.addEventListener('click', () => {
  popupProfile.setInputValues(userInfo.getUserInfo());
  popupProfile.open();
});

buttonRedact.addEventListener('click', () => {
  popupProfile.open()
})

// Добавление новой карточки
const popapAddCard = new PopupWithForm(popupNewCardSelector, (data) => {
  Promise.all([api.getProfileInfo(), api.addCard(data)])
    .then(([resDataUser, resDataCard]) => {
      resDataCard.myid = resDataUser._id;
      section.addItemPrepend(createNewCard(resDataCard))
      popapAddCard.close()
    })
    .catch((error) => console.error(`Ошибка при добавлении карточки ${error}`))
    .finally();
})



buttonPlus.addEventListener('click', () => {
  formAddCardValidator.resetErrorInput()
  popapAddCard.open()
},)

//попап редактирования аватарки профиля
const popupEditAvatar = new PopupWithForm(popupAvatarSelector, (data) => {
  api.setNewAvatar(data)
    .then(res => {
      console.log(res)
      userInfo.setUserInfo({ name: res.name, job: res.about, avatar: res.avatar })
    })
    .catch((error) => console.error(`Ошибка при обновлении аватара ${error}`))
    .finally()
  // popupEditAvatar.close()
})

document.querySelector('.profile__avatar-update').addEventListener('click', () => {
  // formAvatarValidator.resetErrorInput()
  popupEditAvatar.open()
})



popupProfile.setEventListeners() //открытие редактировать профиль
popapAddCard.setEventListeners() //открытие добавить карточку
popupEditAvatar.setEventListeners()
popupImage.setEventListeners() //открытие карточки
deletePopupCard.setEventListeners() //удаление карточки

Promise.all([api.getProfileInfo(), api.getInitialCards()])
  .then(([resDataUser, resDataCard]) => {
    resDataCard.forEach(element => element.myId = resDataUser._id)
    userInfo.setUserInfo({ name: resDataUser.name, job: resDataUser.about, avatar: resDataUser.avatar })
    section.renderItems(resDataCard)
  })
  .catch((error) => console.error(`Ошибка при создании данных ${error}`))
