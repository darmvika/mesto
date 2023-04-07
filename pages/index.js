const openPopupBtn = document.querySelector('.profile__info-rectangle__rectangle');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__content__button');

function toggleOpup() {
    popup.classList.toggle('popup_open');
}

openPopupBtn.addEventListener('click', toggleOpup);

popupCloseBtn.addEventListener('click', toggleOpup);