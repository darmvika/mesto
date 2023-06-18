import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitFuction) {
        super(popupSelector);
        this._submitFuction = submitFuction;
        this._form = this._popup.querySelector('.popup__inputs');
        this._inputList = this._form.querySelectorAll('.popup__input')
    }

    setEventListeners () {
      super.setEventListeners();
      this._form.addEventListener('submit', (evt) =>{
        evt.preventDefault();
        this._submitFuction(this._getInputValues())
        this.close();
      })
  }

    _getInputValues() {
        this._values = {};
        this._inputList.forEach(input => {
            this._values[input.name] = input.value
        })
        return this._values
    }

    setInputValues(dataUser) {
        this._inputList.forEach(input => {
            input.value = dataUser[input.name]
        }) 

    }



    close() {
        super.close();
        this._form.reset();
    }
}