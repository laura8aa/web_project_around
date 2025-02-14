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
