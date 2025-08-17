//contendrá los controladores de eventos y la función que abre/cierra las ventanas modales.
import card from "./Card.js";
import { api } from "./Api.js";
const editInfo = document.getElementById("profile-info");
const editName = document.getElementById("name");
const editAbout = document.getElementById("about");
const popUpPerson = document.getElementById("popup__person");
const saveButton = document.getElementById("save");
const createButton = document.getElementById("create");
const editProfileName = document.getElementById("profile-name");
const popUpPlace = document.getElementById("popup__new-place");
const popUpImage = document.getElementById("popup__image");
const popUpCaption = document.getElementById("popup__caption");
const editTitle = document.getElementById("title");
const editAttach = document.getElementById("attach");
const cardsContainer = document.getElementById("elements");

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

//function for edit button
/*function save(e) {
  e.preventDefault();
  editProfileName.textContent = editName.value;
  editInfo.textContent = editAbout.value;
  closePopUp(e);
}*/

/*
function openPopUpPerson() {
  editName.value = editProfileName.textContent;
  editAbout.value = editInfo.textContent;
  popUpPerson.classList.add("popup__visible");
  saveButton.disabled = true;
  saveButton.classList.add("popup__save-button-disabled");
  createButton.disabled = true;
}*/

function openPopUpPlace() {
  popUpPlace.classList.add("popup__visible");
}

/*
function renderCard(data, cardsContainer) {
  const x1 = new card(data, "#cardtemplate");
  cardsContainer.prepend(x1.setProperties());
}*/

/*
function openPopUpImage(data) {
  popUpImage.classList.add("popup__visible");
  const popUpCaption = popUpImage.querySelector(".popup__caption");
  Image = popUpImage.querySelector(".popupimage");
  Image.src = data.link;
  Image.alt = data.name;
  popUpCaption.textContent = data.name;
}*/

saveButton.addEventListener("click", save);

const closePopUp = document.querySelector(".popup__close-button");

//funcionalidad para agregar carta

/*
function add(e) {
  e.preventDefault();
  let name = editTitle.value;
  let link = editAttach.value;
  api.addCard(name, link);
  renderCard({ name, link }, cardsContainer);
  closePopUp(e);
}*/

//formElement.addEventListener("submit", function (evt) {
// evt.preventDefault();
//});

export { openPopUpPlace, closePopUp, initialCards };
