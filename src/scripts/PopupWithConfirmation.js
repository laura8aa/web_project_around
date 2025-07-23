/*Lleva un callback del envío del formulario al constructor, así como el selector popup.
Almacena un método privado llamado _getInputValues(), que recopila datos de todos los campos de entrada.
Modifica el método padre setEventListeners(). El método setEventListeners() de la clase PopupWithForm 
debe agregar al formulario un controlador de eventos submit y el detector de eventos click en el icono para cerrar.
Modifica el método padre close() para reiniciar el formulario una vez se cierre el popup.
Crea una instancia de la clase PopupWithForm para cada popup.
this handleformSubmit es sinonimo de setUserInfo({ name, job }) {
    this._name.textContent = name;
    this._job.textContent = job;
  }*/

import Popup from "./Popup.js";
import { openPopUpPerson } from "./Utils.js";
import { api } from "./Api.js";

class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this._popupSelector.querySelector(".popup__form");
    this._inputList = this._popupForm.querySelectorAll(".popup__input");

    this._id = null;
  }
  //this._popupSelector = document.querySelector(popupSelector);
  _getInputValues() {
    const FormValues = {};
    this._inputList.forEach((element) => {
      FormValues[element.id] = element.value;
    });
    console.log(FormValues, "FormValues");
    return FormValues;
  }

  //EL SUBMIT PODRAS HACER DOS COSAS; DEPENDIENDO QUIEN ABRA
  //EL POPUP
  //1.-SI EL CLICK FUE EN LA BASURITA, DEBERA ELIMINAR UNA CARTA
  //2.-SI EL CLICK FUE EN EL GUARDAR, DEBERA ACTUALIZAR EL USUARIO

  setEventListeners() {
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit();
      super.setEventListeners();
    });
  }

  setSubmitAction(action) {
    this._handleFormSubmit = action;
  }

  /*otra alternativa

  this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const values = this._getInputValues();
      this._handleFormSubmit(this._getInputValues());
      api.editUser(values.name, values.about);
      console.log(this._getInputValues);
      this._closePopUp(e);
    });
  this._popupForm.addEventListener("submit", () => {
    this._handleFormSubmit(this._popupform.querySelector("la clase del input"));
  });
  super.setEventListeners();*/

  openPopUp(id) {
    super.openPopUp();
    this._id = id;
  }

  close() {
    super._closePopUp();
    console.log(this._id);
  }
}

export default PopupWithConfirmation;

/*
class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
  }

  //function to open popups
  openPopUp() {
    this._popupSelector.classList.add("popup__visible");
  }

  closePopUp(e) {
    const popUp = e.target.closest(".popup");
    this._popupSelector.classList.remove("popup__visible");
  }

  //function to close with esc key
  _handleEscClose() {
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        const activePopUp = document.querySelector(".popup__visible");
        activePopUp.classList.remove("popup__visible");
      }
    });
  }

  //function to close popups
  setEventListeners() {
    console.log(this._popupSelector);
    const closeButton = this._popupSelector.querySelector(".popup__close-button");
    closeButton.addEventListener("click", () => {
      closePopup();
    });

    //function to close popup outside the popup
    this._popupSelector.addEventListener("click", (event) => {
      if (event.target === this._popupSelector) {
        this._popupSelector.classList.remove("popup__visible");
      }
    });
  }
}

export default Popup;*/
