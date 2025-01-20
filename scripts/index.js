const editButton = document.getElementById("edit-button"); //document.querySelector("#edit-button"")
const popup = document.getElementById("popup");
const closeButton = document.getElementById("close-button");
const saveButton = document.getElementById("save");

const editProfileName = document.getElementById("profile-name");
const editInfo = document.getElementById("profile-info");
const editName = document.getElementById("name");
const editAbout = document.getElementById("about");

saveButton.addEventListener("click", save);
function save(e) {
  e.preventDefault();
  console.log("le di click al save");
  editProfileName.textContent = editName.value;
  editInfo.textContent = editAbout.value;
  closePopUp();
}
editButton.addEventListener("click", openPopUp);
function openPopUp() {
  console.log("feliz aprendiendo js");
  popup.classList.add("popup__visible");
}
closeButton.addEventListener("click", closePopUp);
function closePopUp() {
  console.log("feliz aprendiendo js");
  popup.classList.remove("popup__visible");
}
const addButton = document.getElementById("add-button"); //document.querySelector("#edit-button"")
addButton.addEventListener("click", openPop);
function openPop() {
  console.log("HOLA Victor si estoy entendiendo");
}
