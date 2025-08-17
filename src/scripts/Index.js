import Card from "./Card.js";
import FormValidation from "./FormValidation.js";
import { openPopUpPlace, closePopUp, initialCards } from "./Utils.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./popupWithImage.js";
import UserInfo from "./userInfo.js";
import { api } from "./Api.js";
import PopupWithConfirmation from "./PopupWithConfirmation.js";

const editButton = document.getElementById("edit-button");
const addButton = document.getElementById("add-button");
const popUpImageForm = new PopupWithImage("#popup__image");
const UserInfoEdit = new UserInfo("#name");
const popupDeleteConfirmation = new PopupWithConfirmation("#popup__confirmation");
const popupCambiarFoto = document.getElementById("popup__cambiarfoto");
const profileButton = document.querySelector(".profile__button");

const cardList = new Section(
  {
    renderer: function renderCard(data) {
      cardList.addItem(createCard(data));
    },
  },
  "#elements"
);

profileButton.addEventListener("click", () => {
  const popupCambiarFoto = new PopupWithConfirmation("#popup__cambiarfoto", (data) => {
    UserInfoEdit.setUserInfo(data);
  });

  popupCambiarFoto.setEventListeners();
  popupCambiarFoto.openPopUp();
});

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
    UserInfoEdit.setUserInfo(data);
  });
  popUpEdit.setEventListeners();
  popUpEdit.openPopUp();
});

addButton.addEventListener("click", () => {
  const popUpAdd = new PopupWithForm("#popup__new-place", (data) => {
    api
      .addCard(data)
      .then((cardData) => {
        cardList.addItem(createCard(cardData));
        popUpAdd.close();
      })
      .catch((err) => {
        console.error(err);
      });
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

  return new Card(
    data,
    "#cardtemplate",
    () => {
      popUpImageForm.open(link, name);
    },

    (id, card) => {
      popupDeleteConfirmation.openPopUp();
      popupDeleteConfirmation.setSubmitAction(
        async () => {
          try {
            await api.deleteCard(id);
            card.removeCard();
            popupDeleteConfirmation.close();
          } catch (error) {
            console.error("No se pudo eliminar la carta", error);
          }
        },

        () => {
          api
            .likeCard(this._data) /*/llamada al api*/
            .then((rest) => {
              /*then manejar una rta asincrona(se necesita un callback funcion q se pasa como parametro rest es la rta del api*/
              this._data = rest; //se actualiza la info de la carta
            });
        }
      );
    }
  ).setProperties();
};

api.getInitialCards().then((res) => {
  //aqui va cardlist

  cardList.rendererItems(res);
});

api.getUser().then((res) => {
  UserInfoEdit.setUserInfo(res);
});

//boton de inicio de la clase
profileFormValidation.enableValidation();
newPlaceFormValidation.enableValidation();

/* Toggle the "liked" class which changes the color
function like() {
  like.styleBackgroundColor = "black";
}*/

/*saveButton.addEventListener("click", save);*/
//createButton.addEventListener("click", add);
