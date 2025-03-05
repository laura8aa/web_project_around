import { resetValidation, enableValidation, validationConfig } from "./validate.js";

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
const saveButton = document.getElementById("save");
const addButton = document.getElementById("add-button");
const createButton = document.getElementById("create");
const addTitle = document.getElementById("elements__title");
const popUpImage = document.getElementById("popup__image");
const photo = document.querySelector(".elements__card-photo");
const likeButtons = document.querySelectorAll(".elements__like-button");
const popUpPlace = document.getElementById("popup__new-place");
const popUpsForm = document.querySelectorAll(".popup__form");
const popUpPerson = document.getElementById("popup__person");
const handlePopUpClose = (evt) => {};

const editProfileName = document.getElementById("profile-name");
const editInfo = document.getElementById("profile-info");
const editName = document.getElementById("name");
const editAbout = document.getElementById("about");
const editTitle = document.getElementById("title");
const editAttach = document.getElementById("attach");
const cardTemplate = document.getElementById("cardtemplate").content.querySelector(".elements__card"); //content inside template
const cardsContainer = document.getElementById("elements");

//function for edit button
function save(e) {
  e.preventDefault();
  editProfileName.textContent = editName.value;
  editInfo.textContent = editAbout.value;
  closePopUp(e);
}

//function to open popups
function openPopUp() {
  popUps.classList.add("popup__visible");
}

function openPopUpPerson() {
  editName.value = editProfileName.textContent;
  editAbout.value = editInfo.textContent;
  popUpPerson.classList.add("popup__visible");
  saveButton.disabled = true;
  saveButton.classList.add("popup__save-button-disabled");
  createButton.disabled = true;
}
function openPopUpPlace() {
  popUpPlace.classList.add("popup__visible");
}
//function to open photos and caption
function openPopUpImage(data) {
  popUpImage.classList.add("popup__visible");
  popUpCaption = popUpImage.querySelector(".popup__caption");
  Image = popUpImage.querySelector(".popupimage");
  Image.src = data.link;
  Image.alt = data.name;
  popUpCaption.textContent = data.name;
}
function closePopUp(e) {
  const popUp = e.target.closest(".popup");
  popUp.classList.remove("popup__visible");
}
// Toggle the "liked" class which changes the color
function like() {
  like.styleBackgroundColor = "black";
}

//function to close popups
popUps.forEach((popup) => {
  const closeButton = popup.querySelector(".popup__close-button");

  closeButton.addEventListener("click", () => {
    popup.classList.remove("popup__visible");
  });

  //function to close popup outside the popup
  popup.addEventListener("click", (event) => {
    console.log(event.target);
    if (event.target === popup) {
      popup.classList.remove("popup__visible");
    }
  });
});

//function to close with esc key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const activePopUp = document.querySelector(".popup__visible");
    activePopUp.classList.remove("popup__visible");
  }
});

saveButton.addEventListener("click", save);
editButton.addEventListener("click", openPopUpPerson);
addButton.addEventListener("click", openPopUpPlace);
createButton.addEventListener("click", add);

//document.querySelector("#edit-button"")
initialCards.forEach((data) => {
  renderCard(data, cardsContainer);
});

function renderCard(data, cardsContainer) {
  cardsContainer.prepend(getCardElement(data));
}
//function for add button
function add(e) {
  e.preventDefault();
  let name = editTitle.value;
  let link = editAttach.value;
  renderCard({ name, link }, cardsContainer);
  closePopUp(e);
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector(".elements__title");
  const likeButton = cardElement.querySelector(".elements__like-button");
  const cardImg = cardElement.querySelector(".elements__card-photo");
  const trashButton = cardElement.querySelector(".elements__trash-button");
  const popUpCaption = cardElement.querySelector(".popup__caption");

  cardImg.addEventListener("click", () => openPopUpImage(data));

  //function to delete each card
  cardImg.src = data.link;
  cardTitle.textContent = data.name;
  trashButton.addEventListener("click", (evt) => {
    evt.target.closest(".elements__card").remove();
  });

  //function to like a card
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("element__like-button_is-active");
  });
  return cardElement;
}

//form validation
const formElement = document.querySelector(".popup__form");
const formInput = formElement.querySelector(".popup__input");
const messageError = document.querySelector(".popup__message-error");
const urlError = document.getElementById("popup__url-error");
const disabledSaveButton = document.querySelector(".popup__save-button-disabled");

formElement.addEventListener("submit", function (evt) {
  evt.preventDefault();
});
/*
//name message error
editName.addEventListener("input", () => {
  if (editName.value.length < 2 || editName.value.length > 40) {
    messageError.classList.add("popup__message-error-display");
    saveButton.classList.toggle(".popup__save-button-disabled");
    //?
    saveButton.disabled = true;
  } else {
    messageError.classList.remove("popup__message-error-display");
    saveButton.classList.remove(".popup__save-button_disabled");
    saveButton.disabled = false;
  }
});

//profession message error
editAbout.addEventListener("input", () => {
  if (editAbout.value.length < 2 || editAbout.value.length > 200) {
    messageError.classList.add("popup__message-error-display");
    saveButton.disabled = true;
  } else {
    messageError.classList.remove("popup__message-error-display");
    saveButton.disabled = false;
  }
});

//title message error
editTitle.addEventListener("input", () => {
  if (editTitle.value.length < 2 || editTitle.value.length > 30) {
    messageError.classList.add("popup__message-error-display");
    createButton.disabled = true;
  } else {
    messageError.classList.remove("popup__message-error-display");
    createButton.disabled = false;
  }
});

//url message error
editAttach.addEventListener("url", () => {
  if (!urlPattern.test(editTitle.value)) {
    urlError.classList.add("popup__url-error-display");
    saveButton.disabled = true;
  } else {
    urlError.classList.remove("popup__url-error-display");
    saveButton.disabled = false;
  }
});*/
