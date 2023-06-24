(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function n(t,e,n){return(e=r(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(n)?n:String(n)}var o=function(){function t(e,r,o){var i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n(this,"_handleLike",(function(){i._likeIconElement.classList.toggle("element__like_active")})),n(this,"_handleDeleteElement",(function(){i._cloneElement.remove(),i._cloneElement=null})),n(this,"_handleOpenCardPopup",(function(){i._openPopupCard(i._cardData)})),this._cardData=e,this._link=e.link,this._name=e.title,this._selectorTemplate=r,this._openPopupCard=o}var r,o;return r=t,(o=[{key:"_getTemplateClone",value:function(){return document.querySelector(this._selectorTemplate).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListener",value:function(){this._likeIconElement.addEventListener("click",this._handleLike),this._removeElement.addEventListener("click",this._handleDeleteElement),this._imageElement.addEventListener("click",this._handleOpenCardPopup)}},{key:"createCard",value:function(){return this._cloneElement=this._getTemplateClone(),this._imageElement=this._cloneElement.querySelector(".element__img"),this._likeIconElement=this._cloneElement.querySelector(".element__like"),this._removeElement=this._cloneElement.querySelector(".element__remove"),this._subTitle=this._cloneElement.querySelector(".element__title"),this._imageElement.src=this._link,this._imageElement.alt=this._name,this._subTitle.textContent=this._name,this._setEventListener(),this._cloneElement}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),t}();function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===i(o)?o:String(o)),r)}var o}var l=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._errorSelectorTemplate=e.errorSelectorTemplate,this._submitButtonSelector=e.submitButtonSelector,this._disabledButtonClass=e.disabledButtonClass,this._inputErrorClass=e.inputErrorClass,this._textErrorClass=e.textErrorClass,this._form=n}var e,n;return e=t,(n=[{key:"_deactivateButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)}},{key:"_showInputError",value:function(t,e){e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._textErrorClass)}},{key:"_hideInputError",value:function(t,e){e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._textErrorClass)}},{key:"_hasInvalidInput",value:function(){return Array.from(this._inputList).some((function(t){return!t.validity.valid}))}},{key:"_enabledButton",value:function(){this._button.classList.remove(this._disabledButtonClass),this._button.removeAttribute("disabled")}},{key:"_disabledButton",value:function(){this._button.classList.add(this._disabledButtonClass),this._button.setAttribute("disabled",!0)}},{key:"_toggleButton",value:function(){this._hasInvalidInput()?this._disabledButton():this._enabledButton()}},{key:"_checkInputValidity",value:function(t){var e=this._form.querySelector("#".concat(t.id,"-error"));t.validity.valid?this._hideInputError(e,t):this._showInputError(e,t)}},{key:"_setEventListener",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButton()}))}))}},{key:"enableValidation",value:function(){this._button=this._form.querySelector(this._submitButtonSelector),this._inputList=this._form.querySelectorAll(this._inputSelector),this._setEventListener()}},{key:"resetErrorInput",value:function(){var t=this;this._inputList.forEach((function(e){var n=t._form.querySelector("#".concat(e.id,"-error"));e.validity.valid||t._hideInputError(n,e)})),this._disabledButton()}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,p(r.key),r)}}function s(t,e,n){return(e=p(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){var e=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===c(e)?e:String(e)}var f=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,"_handleEscClose",(function(t){"Escape"===t.key&&n.close()})),s(this,"_hendleCloseButton",(function(){n.close()})),s(this,"_handleClickbyOverley",(function(t){t.target===t.currentTarget&&n.close()})),this._popup=document.querySelector(e),this._popupCloseButton=this._popup.querySelector(".popup__close")}var e,n;return e=t,(n=[{key:"setEventListeners",value:function(){this._popupCloseButton.addEventListener("click",this._hendleCloseButton),this._popup.addEventListener("click",this._handleClickbyOverley)}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=v(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},b.apply(this,arguments)}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}function _(t){var e=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===y(e)?e:String(e)}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=v(n);if(r){var o=v(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return d(t)}(this,t)});function i(t){var e,n,r,u,l;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r=d(n=o.call(this,t)),l=function(t){n._popupImage.src=t.link,n._popupImage.alt="Изображение ".concat(t.title),n._imagePopupCaption.textContent=t.title,b((e=d(n),v(i.prototype)),"open",e).call(e)},(u=_(u="open"))in r?Object.defineProperty(r,u,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[u]=l,n._popupImage=n._popup.querySelector(".card__image"),n._imagePopupCaption=n._popup.querySelector(".card__caption"),n}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(f);function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}var g=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._container=document.querySelector(n),this._initialCard=r,this._renderer=o}var e,n;return e=t,(n=[{key:"renderItems",value:function(){var t=this;this._initialCard.forEach((function(e){t.addItem(e)}))}},{key:"addItem",value:function(t){this._container.prepend(this._renderer(t))}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}var j=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(e.profilenameSelector),this._profileJob=document.querySelector(e.profileJobSelector)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,job:this._profileJob.textContent}}},{key:"setUserInfo",value:function(t){this._profileName.textContent=t.name,this._profileJob.textContent=t.job}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},C.apply(this,arguments)}function L(t,e){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},L(t,e)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}var T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=I(r);if(o){var n=I(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitFuction=e,n._form=n._popup.querySelector(".popup__inputs"),n._inputList=n._form.querySelectorAll(".popup__input"),n}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;C(I(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitFuction(t._getInputValues()),t.close()}))}},{key:"_getInputValues",value:function(){var t=this;return this._values={},this._inputList.forEach((function(e){t._values[e.name]=e.value})),this._values}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"close",value:function(){C(I(u.prototype),"close",this).call(this),this._form.reset()}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(f),B=document.querySelector(".profile__redact"),q=document.querySelector(".profile__plus"),x=document.querySelector(".popup__inputs_profile"),R=document.querySelector(".popup__inputs_new-card"),D={formSelector:".popup__inputs",inputSelector:".popup__input",errorSelectorTemplate:".popup__span-error",submitButtonSelector:".popup__save",disabledButtonClass:"popup__save_invalid",inputErrorClass:"popup__input_invalid",textErrorClass:"popup__span-error_visible"};new l(D,x).enableValidation();var V=new l(D,R);V.enableValidation();var A=new j({profilenameSelector:".profile__title",profileJobSelector:".profile__subtitle"}),J=new h(".popup_card"),N=new g({items:[{title:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{title:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{title:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{title:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{title:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{title:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(t){return new o(t,"#element-template",J.open).createCard()}},".group");N.renderItems();var U=new T(".popup_profile",(function(t){A.setUserInfo(t)}));B.addEventListener("click",(function(){U.setInputValues(A.getUserInfo()),U.open()})),B.addEventListener("click",(function(){U.open()}));var F=new T(".popup_new-card",(function(t){N.addItem(t)}));q.addEventListener("click",(function(){V.resetErrorInput(),F.open()})),U.setEventListeners(),F.setEventListeners(),J.setEventListeners()})();