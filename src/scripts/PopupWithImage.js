/*Crea la clase PopupWithImage como una clase hija de Popup.Esta clase tiene que cambiar el método padre open().
 En el método open() de la clase PopupWithImage, debes añadir una imagen al popup y el correspondiente 
 atributo de imagen src junto con una leyenda para la imagen.*/

import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popupSelector.querySelector(".popupimage");
    this._popupText = this._popupSelector.querySelector("#popup__caption");
  }
  open(link, name) {
    this._popupImage.src = link;
    this._popupText.TextContent = name;
    super.openPopUp();
  }
}

export default PopupWithImage;
