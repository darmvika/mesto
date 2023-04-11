const openPopupBtn = document.querySelector('.profile__button-redact');
const popup = document.querySelector('.popup');
const btnClose = document.querySelector('.popup__but-close');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const formElement = document.querySelector('.popup__inputs');


function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');

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