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
  popupAvatarSelector,
  popupDeleteSelector,
  listsElementSelector,
  popupProfileSelector,
  popupNewCardSelector,
  configInfo,
  config
} from '../scripts/utils/constants.js'

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-69',
  headers: {
    authorization: 'a3a28597-c3b7-480a-a7b8-394d6cff5dbd',
    'Content-Type': 'application/json'
  }
});

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
  deletePopupCard.renderLoading(true);
  api.deleteCard(cardId)
    .then(() => {
      card.removeCard()
      deletePopupCard.close()
    })
    .catch((error) => console.error(`Ошибка при снятии лайка ${error}`))
    .finally(() => deletePopupCard.renderLoading(false))

})

function createNewCard(element) {
  const card = new Card(element, selectorTemplate, popupImage.open, deletePopupCard.open, (isLiked, cardId) => {
    if (isLiked) {
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
      popupProfile.close()
    })
    .catch((error) => console.error(`Ошибка при редактировании профиля ${error}`))
    .finally(() => popupProfile.setupDefaultText())
})

buttonRedact.addEventListener('click', () => {
  popupProfile.setInputValues(userInfo.getUserInfo());
  popupProfile.open();
});



// Добавление новой карточки
const popapAddCard = new PopupWithForm(popupNewCardSelector, (data) => {
  api.addCard(data)
    .then((res) => {
      res.myId = res.owner._id;
      section.addItemPrepend(createNewCard(res))
      popapAddCard.close()
    })
    .catch((error) => console.error(`Ошибка при добавлении карточки ${error}`))
    .finally(() => popapAddCard.setupDefaultText());
})



buttonPlus.addEventListener('click', () => {
  formAddCardValidator.resetErrorInput()
  popapAddCard.open()
},)

//попап редактирования аватарки профиля
const popupEditAvatar = new PopupWithForm(popupAvatarSelector, (data) => {
  api.setNewAvatar(data)
    .then(res => {
      userInfo.setUserInfo({ name: res.name, job: res.about, avatar: res.avatar })
      popupEditAvatar.close()
    })
    .catch((error) => console.error(`Ошибка при обновлении аватара ${error}`))
    .finally(() => popupEditAvatar.setupDefaultText());


})

document.querySelector('.profile__avatar-update').addEventListener('click', () => {
  formAvatarValidator.resetErrorInput()
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
