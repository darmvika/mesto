const openPopupBtn = document.querySelector('.profile__button-redact');
const popup = document.querySelector('.popup');
const btnClose = document.querySelector('.popup__butClose');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const formElement = document.querySelector('.popup__content');


function openPopup() {
    popup.classList.add('popup__opened');
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
}

function closePopup() {
    popup.classList.remove('popup__opened');

}


function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();

}

openPopupBtn.addEventListener('click', openPopup);
btnClose.addEventListener('click', closePopup,);
formElement.addEventListener('submit', handleFormSubmit);