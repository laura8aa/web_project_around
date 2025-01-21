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
  editProfileName.textContent = editName.value;
  editInfo.textContent = editAbout.value;
  closePopUp();
}
editButton.addEventListener("click", openPopUp);
function openPopUp() {
  popup.classList.add("popup__visible");
}
closeButton.addEventListener("click", closePopUp);
function closePopUp() {
  popup.classList.remove("popup__visible");
}
const addButton = document.getElementById("add-button"); //document.querySelector("#edit-button"")
addButton.addEventListener("click", openPop);
