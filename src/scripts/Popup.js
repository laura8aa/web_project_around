/*El constructor tiene un solo parámetro, que es el selector popup.
Almacena los métodos públicos open() y close() que abrirán y cerrarán el popup.
Almacena un método privado llamado _handleEscClose() que almacena la lógica para 
cerrar el popup al pulsar la tecla Esc.
Almacena un método público llamado setEventListeners() que agrega un detector de 
eventos de click al icono para cerrar el popup.
 La ventana modal también debe cerrarse cuando los usuarios hacen clic en el área sombreada del formulario.*/
export class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
  }

  //function to open popups
  openPopUp() {
    this._popupSelector.classList.add("popup__visible");
    console.log("Se copio todo el OpenPopup");
  }

  _closePopUp(e) {
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
    closeButton.addEventListener("click", (e) => {
      this._closePopUp(e);
      console.log("click close");
    });

    //function to close popup outside the popup
    this._popupSelector.addEventListener("click", (event) => {
      if (event.target === this._popupSelector) {
        this._popupSelector.classList.remove("popup__visible");
      }
    });
  }
}

export default Popup;
