export default class Section {
    constructor(renderer, containerSelector) {
        this._container = document.querySelector(containerSelector);
        // this._initialCard = items;
        this._renderer = renderer;
    }

    renderItems(dataCard) {
        dataCard.forEach(element => {
            this._renderer(element)
        })
    }

    addItemAppend(elementDom) {
      this._container.append(elementDom);
  }
    addItemPrepend(elementDom) {
        this._container.prepend(elementDom);
    }
}