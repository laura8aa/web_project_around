import Card from "./Card.js";
import FormValidation from "./FormValidation.js";
import { openPopUpPerson, openPopUpPlace, renderCard, add, initialCards } from "./Utils.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./popupWithImage.js";
import UserInfo from "./userInfo.js";
import { api } from "./Api.js";
import PopupWithConfirmation from "./PopupWithConfirmation.js";

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

const popUpImageForm = new PopupWithImage("#popup__image");

const UserInfoEdit = new UserInfo("#name");

const popupDeleteConfirmation = new PopupWithConfirmation("#popup__confirmation");
popupDeleteConfirmation.setEventListeners(); //esto manda llamar al evento de event listener

//popUpImageForm.open();
//const t1 = new PopupWithForm("#popup__person"); //le quitan a index.js y separas responsabilidades
//t1.setEventListeners();
//t1.openPopUp(); //tarea en el click del boton del lapicito
//tarea el otro boton abra el popup de la carta pero ya lase popupWithForm
//arreglo y objeto es casi casi lo mismo
/*
initialCards.forEach((element) => {
  renderCard(element, cardsContainer);
});*/

editButton.addEventListener("click", () => {
  //constructor(popupSelector, handleFormSubmit)
  const popUpEdit = new PopupWithForm("#popup__person", (data) => {
    console.log(data);
    UserInfoEdit.setUserInfo(data);
  });
  popUpEdit.setEventListeners();
  popUpEdit.openPopUp();
});

addButton.addEventListener("click", () => {
  const popUpAdd = new PopupWithForm("#popup__new-place", () => {
    add(); //hace el callback
  });
  popUpAdd.setEventListeners();
  popUpAdd.openPopUp();
});

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

const createCard = (data) => {
  const link = data.link;
  const name = data.name;
  const id = data._id;
  console.log(data);
  return new Card(
    data,
    "#cardtemplate",
    () => {
      popUpImageForm.open(link, name);
    },

    //API
    //1.- Eliminar la carta de la API
    //2.- Y SI SE ELIMINA CORRECTAMENTE (200 ok) Eliminar la carta del DOM
    //
    (id, card) => {
      popupDeleteConfirmation.openPopUp();
      popupDeleteConfirmation.setSubmitAction(async () => {
        console.log("Eliminar la carta de la API");
        try {
          await api.deleteCard(id);
          card.removeCard();
          popupDeleteConfirmation.close();
        } catch (error) {
          console.error("No se pudo eliminar la carta", error);
        }
      });
    }
  ).setProperties();
};

api.getInitialCards().then((res) => {
  const cardList = new Section(
    {
      items: res,
      renderer: function renderCard(data) {
        cardList.addItem(createCard(data));
      },
    },
    "#elements"
  );
  cardList.rendererItems();
});

api.getUser().then((res) => {
  UserInfoEdit.setUserInfo(res);
  console.log(res);
});

//boton de inicio de la clase
profileFormValidation.enableValidation();
newPlaceFormValidation.enableValidation();

/* Toggle the "liked" class which changes the color
function like() {
  like.styleBackgroundColor = "black";
}*/

/*saveButton.addEventListener("click", save);*/
createButton.addEventListener("click", add);
