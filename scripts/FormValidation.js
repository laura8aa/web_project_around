class FormValidation {
  constructor({ inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }, formSelector) {
    this._formSelector = formSelector;
    this._inputSelector = inputSelector;
    this._submitButtonSelector = submitButtonSelector;
    this._inactiveButtonClass = inactiveButtonClass;
    this._inputErrorClass = inputErrorClass;
    this._errorClass = errorClass;
  }

  _resetValidation = () => {
    const formList = Array.from(document.querySelectorAll(this._formSelector));
    formList.forEach((form) => {
      form.reset();
      const inputList = Array.from(form.querySelectorAll(this._inputSelector));
      inputList.forEach((inputList) => {
        //ocultar el error
        //inactiar el boton
      });
    });
  };

  _setEventListeners = (form) => {
    const inputs = Array.from(form.querySelectorAll(this._inputSelector));
    //console.log(inputs);
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._validation(input);
      });
    });
  };

  _validation(input) {
    let allInputs = true;
    console.log(input);
    const span = input.closest(".popup__field").querySelector(this._inputErrorClass); //TE IDENTIFICA LA CLASE MAS CERCANA HACIA ABAJO (SOLO UNA);

    const disabledSaveButton = document.querySelector(this._inactiveButtonClass);

    if (input.value.length < input.getAttribute("minlength") || input.value.length > input.getAttribute("maxlength")) {
      span.classList.add("popup__message-error-display");
      span.textContent = "Por favor, rellena este campo.";

      allInputs = false;

      if (input.type == "url") {
        span.textContent = "Por favor, introduce una direccion web.";
      }
    } else {
      span.classList.remove("popup__message-error-display");
    }

    const saveButton = document.querySelector(this._submitButtonSelector);
    if (allInputs) {
      saveButton.disabled = false;
      // createButton.disabled = false;
      saveButton.classList.remove(this._inactiveButtonClass);
    } else {
      saveButton.disabled = true;
      // createButton.disabled = true;
      saveButton.classList.add(this._inactiveButtonClass);
    }
  }

  enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(this._formSelector));

    console.log(formList);
    formList.forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
      });
      this._setEventListeners(form);
      //ocultar el error
      //inactiar el boton
    });
  };
}

export default FormValidation;
