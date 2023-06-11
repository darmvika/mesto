/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Card.js":
/*!*********************!*\
  !*** ./src/Card.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Card)\n/* harmony export */ });\nclass Card{ \r\n    constructor(cardsData, selectorTemplate, openPopupCard){\r\n        this._cardsData = cardsData;\r\n        this._link = cardsData.link;\r\n        this._name = cardsData.name;\r\n        this._selectorTemplate = selectorTemplate;\r\n        this._openPopupCard = openPopupCard;\r\n    }\r\n    _getTemplateClone(){\r\n        return document.querySelector(this._selectorTemplate).content.querySelector('.element').cloneNode(true);\r\n    }\r\n\r\n    _handleLike = () => {\r\n        this._likeIconElement.classList.toggle('element__like_active');\r\n    }\r\n\r\n    _handleDeleteElement = () => {\r\n        this._cloneElement.remove();\r\n    }\r\n\r\n    _handleOpenCardPopup = () => {\r\n        this._openPopupCard(this._cardsData)\r\n    }\r\n\r\n    _setEventListener(){\r\n        this._likeIconElement.addEventListener('click',this._handleLike );\r\n        this._removeElement.addEventListener('click', this._handleDeleteElement)\r\n        this._imageElement.addEventListener('click', this._handleOpenCardPopup)\r\n    }\r\n\r\n\r\n    createCard() {\r\n        this._cloneElement = this._getTemplateClone();\r\n        this._imageElement = this._cloneElement.querySelector('.element__img')\r\n        this._likeIconElement = this._cloneElement.querySelector('.element__like');\r\n        this._removeElement= this._cloneElement.querySelector('.element__remove');\r\n        this._subTitle = this._cloneElement.querySelector('.element__title');\r\n        this._imageElement.src = this._link;\r\n        this._imageElement.alt = this._name;\r\n        this._subTitle.textContent = this._name;\r\n        this._setEventListener()\r\n        return  this._cloneElement ;\r\n    }\r\n}\n\n//# sourceURL=webpack://yandex_praktikum/./src/Card.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initialCards = [\r\n    {\r\n        name: 'Архыз',\r\n        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'\r\n    },\r\n    {\r\n        name: 'Челябинская область',\r\n        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'\r\n    },\r\n    {\r\n        name: 'Иваново',\r\n        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'\r\n    },\r\n    {\r\n        name: 'Камчатка',\r\n        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'\r\n    },\r\n    {\r\n        name: 'Холмогорский район',\r\n        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'\r\n    },\r\n    {\r\n        name: 'Байкал',\r\n        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'\r\n    }\r\n]; \r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialCards);\r\n\r\n\n\n//# sourceURL=webpack://yandex_praktikum/./src/constants.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./src/constants.js\");\n/* harmony import */ var _Card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.js */ \"./src/Card.js\");\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validate.js */ \"./src/validate.js\");\n\r\n\r\n\r\n\r\nconst selectorTemplate = '#element-template';\r\nconst elementContainer = document.querySelector('.group')\r\nconst listsElement = document.querySelector('.element')\r\n\r\n\r\nconst popupList = Array.from(document.querySelectorAll('.popup'));\r\nconst popupProfile = document.querySelector('.popup_profile')\r\nconst buttonRedact = document.querySelector('.profile__redact')\r\nconst profileName = document.querySelector('.profile__title');\r\nconst profileJob = document.querySelector('.profile__subtitle');\r\nconst nameInput = document.querySelector('.popup__input_type_name');\r\nconst jobInput = document.querySelector('.popup__input_type_job');\r\nconst formProfile = document.querySelector('.popup__inputs_profile');\r\n\r\nconst newCard = document.querySelector('.popup_new-card');\r\nconst buttonPlus = document.querySelector('.profile__plus')\r\nconst formCards = document.querySelector('.popup__inputs_new-card')\r\nconst namedCardInput = document.querySelector('.popup__input_type_named');\r\nconst linkCardInput = document.querySelector('.popup__input_type_link');\r\n\r\nconst popupCard = document.querySelector('.popup_card')\r\nconst popupCaption = document.querySelector('.card__caption');\r\nconst popupImgs = document.querySelector('.card__image');\r\n\r\nconst config = {\r\n    formSelector: \".popup__inputs\",\r\n    inputSelector: \".popup__input\", \r\n    errorSelectorTemplate: \".popup__span-error\", \r\n    submitButtonSelector: \".popup__save\",\r\n    disabledButtonClass: \"popup__save_invalid\", \r\n    inputErrorClass: \"popup__input_invalid\", \r\n    textErrorClass: \"popup__span-error_visible\", \r\n};\r\n\r\n\r\n//создаем экземпляр класса FormValidator для попапа редактирования и запускаем валидации\r\nconst formProfileInfoValidator = new _validate_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](config, formProfile);\r\nformProfileInfoValidator.enableValidation();\r\n\r\n//создаем экземпляр класса FormValidator для попапа добавления карточки и запускаем валидации\r\nconst formAddCardValidator = new _validate_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](config, formCards);\r\nformAddCardValidator.enableValidation();\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//закртыие на оверлей\r\nconst handlePopupClose = (evt) => {\r\n    const isOverlay = evt.target.classList.contains('popup');\r\n    const isCloseBtn = evt.target.classList.contains('popup__close');\r\n\r\n    if (isOverlay || isCloseBtn) {\r\n        popupList.forEach(closePopup);\r\n    }\r\n};\r\n\r\n\r\n// закртыие на кнопку эскейп\r\nconst closePressTheEsc = (evt) => {\r\n    if (evt.key === 'Escape') {\r\n        popupList.forEach(closePopup);\r\n    }\r\n}\r\n\r\nconst openPopup = (popupElement) => {\r\n    popupElement.classList.add('popup_opened');\r\n    document.addEventListener('click', handlePopupClose);\r\n    document.addEventListener('keydown', closePressTheEsc);\r\n}\r\n\r\nconst closePopup = (popupElement) => {\r\n    popupElement.classList.remove('popup_opened');\r\n    document.removeEventListener('click', handlePopupClose);\r\n    document.removeEventListener('keydown', closePressTheEsc);\r\n}\r\n\r\n//попап с открытием карты\r\nconst openPopupCard = (cardsData) => {\r\n    popupCaption.textContent = cardsData.name;\r\n    popupImgs.src = cardsData.link;\r\n    popupImgs.alt = cardsData.name;\r\n    openPopup(popupCard);\r\n}\r\n\r\n\r\n\r\n//функция с открытием карточки\r\nfunction createNewCard(card) {\r\n    const element = new _Card_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](card, selectorTemplate, openPopupCard);\r\n    const cardElement = element.createCard()\r\n    return cardElement\r\n}\r\n\r\n\r\nconst renderCards = (container, card) => {\r\n    elementContainer.prepend(card)\r\n\r\n}\r\n\r\n_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach(card => {\r\n    renderCards(listsElement, createNewCard(card));\r\n});\r\n\r\n\r\n\r\n//popup PROFILE\r\n\r\nconst openPopupProfile = () => {\r\n    nameInput.value = profileName.textContent;\r\n    jobInput.value = profileJob.textContent;\r\n    openPopup(popupProfile)\r\n}\r\n\r\n\r\nconst submitProfileForm = (evt) => {\r\n    evt.preventDefault();\r\n    profileName.textContent = nameInput.value;\r\n    profileJob.textContent = jobInput.value;\r\n    closePopup(popupProfile);\r\n}\r\n\r\n\r\n\r\n//popup с добавлением карточки\r\n\r\nconst openNewCard = () => {\r\n    formCards.reset();\r\n    formAddCardValidator.resetErrorInput();\r\n    openPopup(newCard)\r\n}\r\n\r\n\r\n\r\n// Добавление новой карточки\r\n\r\nformCards.addEventListener('submit', (evt) => {\r\nevt.preventDefault();\r\nconst cardDataNameUrl = {name: namedCardInput.value, link: linkCardInput.value};\r\nrenderCards(listsElement, createNewCard(cardDataNameUrl))\r\nevt.target.reset();\r\nevt.submitter.classList.add('popup__save_invalid')\r\nevt.submitter.disabled = true;\r\nclosePopup(newCard)\r\n})\r\n\r\n\r\n\r\n\r\nbuttonPlus.addEventListener('click', openNewCard)\r\nbuttonRedact.addEventListener('click', openPopupProfile)\r\nformProfile.addEventListener('submit', submitProfileForm);\r\n// formCards.addEventListener('submit', newCardBlock)\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://yandex_praktikum/./src/index.js?");

/***/ }),

/***/ "./src/validate.js":
/*!*************************!*\
  !*** ./src/validate.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FormValidator)\n/* harmony export */ });\nclass FormValidator {\r\n    constructor(config, form) {\r\n        this._inputSelector = config.inputSelector;\r\n        this._errorSelectorTemplate = config.errorSelectorTemplate;\r\n        this._submitButtonSelector = config.submitButtonSelector;\r\n        this._disabledButtonClass = config.disabledButtonClass;\r\n        this._inputErrorClass = config.inputErrorClass;\r\n        this._textErrorClass = config.textErrorClass;\r\n        // this._button = form.querySelector(this._submitButtonSelector);\r\n        // this._inputList = form.querySelectorAll(this._inputSelector);\r\n        this._form = form;\r\n\r\n    }\r\n\r\n    _deactivateButton() {\r\n        this._buttonElement.classList.add(this._inactiveButtonClass);\r\n        this._buttonElement.setAttribute('disabled', true);\r\n    }\r\n\r\n    _showInputError(errorTextElement, input) {\r\n        input.classList.add(this._inputErrorClass);\r\n        errorTextElement.textContent = input.validationMessage;\r\n        errorTextElement.classList.add(this._textErrorClass)\r\n\r\n    }\r\n\r\n    _hideInputError(errorTextElement, input) {\r\n        input.classList.remove(this._inputErrorClass);\r\n        errorTextElement.textContent = '';\r\n        errorTextElement.classList.remove(this._textErrorClass)\r\n    }\r\n\r\n    _hasInvalidInput() {\r\n        return Array.from(this._inputList).some((input) => !input.validity.valid);\r\n    }\r\n\r\n    _enabledButton() {\r\n        this._button.classList.remove(this._disabledButtonClass);\r\n        this._button.removeAttribute('disabled');\r\n    }\r\n\r\n    _disabledButton() {\r\n        this._button.classList.add(this._disabledButtonClass);\r\n        this._button.setAttribute('disabled', true);\r\n    }\r\n\r\n    _toggleButton() {\r\n        this._hasInvalidInput() ? this._disabledButton() : this._enabledButton();\r\n    }\r\n\r\n    _checkInputValidity(input) {\r\n        const errorTextElement = this._form.querySelector(`#${input.id}-error`)\r\n        input.validity.valid ? this._hideInputError(errorTextElement, input) : this._showInputError(errorTextElement, input);\r\n    }\r\n\r\n    _setEventListener() {\r\n        this._inputList.forEach((input) => {\r\n            input.addEventListener('input', () => {\r\n                this._checkInputValidity(input);\r\n                this._toggleButton()\r\n            });\r\n        })\r\n    }\r\n\r\n    enableValidation() {\r\n        this._button = this._form.querySelector(this._submitButtonSelector);\r\n        this._inputList = this._form.querySelectorAll(this._inputSelector);\r\n        this._setEventListener()\r\n        // this._setEventListener();\r\n    };\r\n\r\n    resetErrorInput() {\r\n        this._inputList.forEach((input) => {\r\n            const errorTextElement = this._form.querySelector(`${this._errorSelectorTemplate}${input.name}`)\r\n            if (!input.validity.valid) {\r\n                this._hideInputError(errorTextElement, input)\r\n            }\r\n        })\r\n        this._disabledButton()\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://yandex_praktikum/./src/validate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;