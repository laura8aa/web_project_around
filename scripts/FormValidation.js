const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button-disabled",
  inputErrorClass: ".popup__message-error",
  errorClass: "popup__error_visible", //pendiente
};
const resetValidation = () => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((form) => {
    form.reset();
    const inputList = Array.from(form.querySelectorAll(inputSelector));
    inputList.forEach((inputList) => {
      //ocultar el error
      //inactivar el boton
    });
  });
};

const setEventListeners = (form, data) => {
  const inputs = form.querySelectorAll(data.inputSelector);

  const saveButton = document.getElementById("save");
  const createButton = document.getElementById("create");

  inputs.forEach((input) => {
    input.addEventListener("input", validation);
  });
  function validation() {
    let allInputs = true;

    inputs.forEach((input) => {
      const span = input.closest(".popup__field").querySelector(".popup__message-error"); // IDENTIFICA LA CLASE MAS CERCANA HACIA ABAJO (SOLO UNA);
      const disabledSaveButton = document.querySelector(".popup__save-button-disabled");

      if (
        input.value.length < input.getAttribute("minlength") ||
        input.value.length > input.getAttribute("maxlength")
      ) {
        span.classList.add("popup__message-error-display");
        span.textContent = "Por favor, rellena este campo.";

        allInputs = false;

        if (input.type == "url") {
          span.textContent = "Por favor, introduce una dirección web.";
        }
      } else {
        span.classList.remove("popup__message-error-display");
      }
    });

    if (allInputs) {
      saveButton.disabled = false;
      createButton.disabled = false;
      saveButton.classList.remove("popup__save-button-disabled");
    } else {
      saveButton.disabled = true;
      createButton.disabled = true;
      saveButton.classList.add("popup__save-button-disabled");
    }
  }
};
const enableValidation = (data) => {
  const formList = Array.from(document.querySelectorAll(data.formSelector));
  formList.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    setEventListeners(form, data);
    //ocultar el error
    //inactiar el boton
  });
};
enableValidation(validationConfig);
export { resetValidation, enableValidation, validationConfig };
