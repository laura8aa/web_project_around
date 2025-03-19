//contendrá el código de la clase Card.
/*<template id="cardtemplate">
            <div class="elements__card">
              <img class="elements__card-photo" src="#" alt="" />

              <div class="elements__content">
                <p class="elements__title"></p>
                <button class="elements__like-button" alt="Boton like"></button>
                <button class="elements__trash-button"></button>
              </div>
            </div>
          </template> */

class card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = document.querySelector(cardSelector);
  }
  setProperties() {
    const cardTemplate = this._cardSelector.content.querySelector(".elements__card"); //content inside template
    const cardElement = cardTemplate.cloneNode(true);
    const cardTitle = cardElement.querySelector(".elements__title");
    const likeButton = cardElement.querySelector(".elements__like-button");
    const cardImg = cardElement.querySelector(".elements__card-photo");
    const trashButton = cardElement.querySelector(".elements__trash-button");
    const popUpCaption = cardElement.querySelector(".popup__caption");

    cardImg.addEventListener("click", () => openPopUpImage(data));

    //function to delete each card
    cardImg.src = this._link;
    cardTitle.textContent = this._name;
    trashButton.addEventListener("click", (evt) => {
      evt.target.closest(".elements__card").remove();
    });

    //function to like a card
    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("element__like-button_is-active");
    });
    return cardElement;
  }
}

/*initialCards.forEach((data) => {
  renderCard(data, cardsContainer);
});*/

function renderCard(data, cardsContainer) {
  cardsContainer.prepend(getCardElement(data));
}

// Toggle the "liked" class which changes the color
function like() {
  like.styleBackgroundColor = "black";
}

export default card;
