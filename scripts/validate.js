//не понимаю почему ошибка появляется только под первым инпутом

export default class FormValidator {
    constructor(config, form) {
        this._inputSelector = config.inputSelector;
        this._errorSelectorTemplate = config.errorSelectorTemplate;
        this._submitButtonSelector = config.submitButtonSelector;
        this._disabledButtonClass = config.disabledButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._textErrorClass = config.textErrorClass;
        // this._button = form.querySelector(this._submitButtonSelector);
        // this._inputList = form.querySelectorAll(this._inputSelector);
        this._form = form;

    }

    _deactivateButton() {
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.setAttribute('disabled', true);
    }

    _showInputError(errorTextElement, input) {
        input.classList.add(this._inputErrorClass);
        errorTextElement.textContent = input.validationMessage;
        errorTextElement.classList.add(this._textErrorClass)

    }

    _hideInputError(errorTextElement, input) {
        input.classList.remove(this._inputErrorClass);
        errorTextElement.textContent = '';
        errorTextElement.classList.remove(this._textErrorClass)
    }

    _hasInvalidInput() {
        return Array.from(this._inputList).some((input) => !input.validity.valid);
    }

    _enabledButton() {
        this._button.classList.remove(this._disabledButtonClass);
        this._button.removeAttribute('disabled');
    }

    _disabledButton() {
        this._button.classList.add(this._disabledButtonClass);
        this._button.setAttribute('disabled', true);
    }

    _toggleButton() {
        this._hasInvalidInput() ? this._disabledButton() : this._enabledButton();
    }

    _checkInputValidity(input) {
        const errorTextElement = this._form.querySelector(`#${input.id}-error`)
        input.validity.valid ? this._hideInputError(errorTextElement, input) : this._showInputError(errorTextElement, input);
    }

    _setEventListener() {
        this._inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._toggleButton()
            });
        })
    }

    enableValidation() {
        this._button = this._form.querySelector(this._submitButtonSelector);
        this._inputList = this._form.querySelectorAll(this._inputSelector);
        this._setEventListener()
        // this._setEventListener();
    };

    resetErrorInput() {
        this._inputList.forEach((input) => {
            const errorTextElement = this._form.querySelector(`${this._errorSelectorTemplate}${input.name}`)
            if (!input.validity.valid) {
                this._hideInputError(errorTextElement, input)
            }
        })
        this._disabledButton()
    }
}
