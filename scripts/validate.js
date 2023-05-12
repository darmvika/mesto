const enableValidations = {
    formSelector: '.popup__inputs',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_invalid',
    inputErrorClass: 'popup__inputs_invalid',
    errorClass: 'popup__span-error'
};



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
    button.classList.add('popup__save_invalid')
    button.setAttribute('disabled', true)

}

const dissabledButton = (button) => {
    button.classList.remove('popup__save_invalid') //Не особо поняла как должно быть написано при любых исправлениях перестает работать
    button.removeAttribute('disabled', true)
}

enableValidation(enableValidations)
