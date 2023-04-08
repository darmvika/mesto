const openPopupBtn = document.querySelector('.profile__button-redact');
const popup = document.querySelector('.popup');
const btnClose = document.querySelector('.popup__butClose');
const btnSave = document.querySelector('.popup__butSave');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const formElement = document.querySelector('.popup__content');
nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;

function openPopup() {
    popup.classList.add('popup_opened');
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
}
openPopupBtn.addEventListener('click', openPopup);

function closePopup() {
    popup.classList.remove('popup_opened');
    

}
formElement.addEventListener('submit', handleFormSubmit);
btnClose.addEventListener('click', closePopup);

function handleFormSubmit(evt) {
    evt.preventDefault();
    nameInput = document.querySelector('.popup__input_name');
    jobInput = document.querySelector('.popup__input_job');
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
}



