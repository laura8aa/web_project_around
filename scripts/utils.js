//contendrá los controladores de eventos y la función que abre/cierra las ventanas modales.
import card from "./card.js";

const editInfo = document.getElementById("profile-info");
const editName = document.getElementById("name");
const editAbout = document.getElementById("about");
const popUpPerson = document.getElementById("popup__person");
const saveButton = document.getElementById("save");
const createButton = document.getElementById("create");
const editProfileName = document.getElementById("profile-name");
const popUpPlace = document.getElementById("popup__new-place");

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

function renderCard(data, cardsContainer) {
  const x1 = new card(data, "#cardtemplate");
  cardsContainer.prepend(x1.setProperties());
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
/* Toggle the "liked" class which changes the color
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
    if (event.target === popup) {
      popup.classList.remove("popup__visible");
    }
  });
});*/

//function to close with esc key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const activePopUp = document.querySelector(".popup__visible");
    activePopUp.classList.remove("popup__visible");
  }
});

//saveButton.addEventListener("click", save);
//editButton.addEventListener("click", openPopUpPerson);
//addButton.addEventListener("click", openPopUpPlace);
//createButton.addEventListener("click", add);

//document.querySelector("#edit-button"")
//initialCards.forEach((data) => {
// renderCard(data, cardsContainer);
//});

//function renderCard(data, cardsContainer) {
// cardsContainer.prepend(getCardElement(data));
//}

//function for add button
function add(e) {
  e.preventDefault();
  let name = editTitle.value;
  let link = editAttach.value;
  renderCard({ name, link }, cardsContainer);
  closePopUp(e);
}

//formElement.addEventListener("submit", function (evt) {
// evt.preventDefault();
//});

export { openPopUpPerson, openPopUpPlace, renderCard };
