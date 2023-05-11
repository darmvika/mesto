const enableValidations = {
    formSelector: '.popup__inputs',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__close',
    inactiveButtonClass: 'popup__save_invalid',
    inputErrorClass: 'popup__inputs_invalid',
    errorClass: 'popup__span-error'
};




//кнопка cохранить профиль


const enableValidation = ({ formSelector, ...rest }) => {
    const forms = Array.from(document.querySelectorAll(formSelector));
    forms.forEach(form => {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault()
        })
        setEventListeners(form, rest)

    })
}

const setEventListeners = (form, { inputSelector, submitButtonSelector, ...rest }) => {
    const formInputs = Array.from(form.querySelectorAll(inputSelector));
    const formButton = form.querySelector(submitButtonSelector);
    dissabledButton(formButton)
    formInputs.forEach(input => {
        input.addEventListener('input', () => {
            checkInputsValidity(input)
            if (hasInvalidInput(formInputs)) {
                enabledButton(formButton)
            } else {
                dissabledButton(formButton)
                
            }
        })
    })

}

const checkInputsValidity = (input) => {
    const currentInputContainer = document.querySelector(`#${input.id}-error`)
    console.log(currentInputContainer)
    if (input.checkValidity()) {
        currentInputContainer.textContent = ''
    } else {
        currentInputContainer.textContent = input.validationMessage
    }

}

const hasInvalidInput = (formInputs) => {
    return formInputs.some(item => !item.validity.valid)

}

const buttonSave = document.querySelector('.popup__save')

const enabledButton = (button) => {
    buttonSave.classList.remove('popup__save_valid')
    buttonSave.classList.add('popup__save_invalid')
    buttonSave.setAttribute('disabled', true)

}

const dissabledButton = (button) => {
    buttonSave.classList.add('popup__save_valid')
    buttonSave.classList.remove('popup__save_invalid')
    buttonSave.removeAttribute('disabled', true)
}

enableValidation(enableValidations)
