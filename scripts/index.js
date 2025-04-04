import card from "./card.js";
import FormValidation from "./FormValidation.js";
import { openPopUpPerson, openPopUpPlace, renderCard, add, save } from "./utils.js";

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
    alt: "Valle de Yosemite",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
    alt: "Lago Louise",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
    alt: "Montañas Calvas",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
    alt: "Latemar",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
    alt: "Parque Nacional de la Vanoise",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
    alt: "Lago di Braies",
  },
];

const editButton = document.getElementById("edit-button"); //document.querySelector("#edit-button"")
const popUps = document.querySelectorAll(".popup");
const addButton = document.getElementById("add-button");
const addTitle = document.getElementById("elements__title");
const popUpImage = document.getElementById("popup__image");
const photo = document.querySelector(".elements__card-photo");
const likeButtons = document.querySelectorAll(".elements__like-button");

const popUpsForm = document.querySelectorAll(".popup__form");
const handlePopUpClose = (evt) => {};
const editTitle = document.getElementById("title");
const editAttach = document.getElementById("attach");
const cardTemplate = document.getElementById("cardtemplate").content.querySelector(".elements__card"); //content inside template
const cardsContainer = document.getElementById("elements");
const saveButton = document.querySelector(".popup__save-button");
const createButton = document.getElementById("create");

//arreglo y objeto es casi casi lo mismo

initialCards.forEach((element) => {
  renderCard(element, cardsContainer);
});

editButton.addEventListener("click", openPopUpPerson);
addButton.addEventListener("click", openPopUpPlace);

const validationConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button-disabled",
  inputErrorClass: ".popup__message-error",
  errorClass: "popup__error_visible", //pendiente
};
//constructor seleccionar el html
const profileFormValidation = new FormValidation(validationConfig, "#popup__form_profile");
const newPlaceFormValidation = new FormValidation(validationConfig, "#popup__new-place");

//boton de inicio de la clase
profileFormValidation.enableValidation();
newPlaceFormValidation.enableValidation();

//function to open popups
function openPopUp() {
  popUps.classList.add("popup__visible");
}

function closePopUp(e) {
  const popUp = e.target.closest(".popup");
  popUp.classList.remove("popup__visible");
}
/* Toggle the "liked" class which changes the color
function like() {
  like.styleBackgroundColor = "black";
}*/

//function to close popups
popUps.forEach((popup) => {
  const closeButton = popup.querySelector(".popup__close-button");

  closeButton.addEventListener("click", () => {
    popup.classList.remove("popup__visible");
  });

  //function to close popup outside the popup
  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.classList.remove("popup__visible");
    }
  });
});
saveButton.addEventListener("click", save);
createButton.addEventListener("click", add);

//function to close with esc key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const activePopUp = document.querySelector(".popup__visible");
    activePopUp.classList.remove("popup__visible");
  }
});
