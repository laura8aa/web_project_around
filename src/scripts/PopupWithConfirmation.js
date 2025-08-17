import Popup from "./Popup.js";
import { api } from "./Api.js";

class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this._popupSelector.querySelector(".popup__form");
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
    this._handleFormSubmit = handleFormSubmit;
    this._id = null;
  }
  //this._popupSelector = document.querySelector(popupSelector);
  _getInputValues() {
    const FormValues = {};
    this._inputList.forEach((element) => {
      FormValues[element.id] = element.value;
    });
    return FormValues;
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const values = this._getInputValues();
      this._handleFormSubmit(values);
      api.editImage(values.avatar); //llamo a la api y el metodo
      super._closePopUp(e);
    });

    super.setEventListeners();
  }

  setSubmitAction(action) {
    this._handleFormSubmit = action;
  }

  openPopUp(id) {
    super.openPopUp();
    this._id = id;
  }

  close() {
    super._closePopUp();
  }
}

export default PopupWithConfirmation;
