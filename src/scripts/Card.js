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
import { api } from "./Api.js";

class Card {
  constructor(data, cardSelector, handleImageClick, handleDeleteClick) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = document.querySelector(cardSelector);
    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;

    // console.log(this._handleDeleteClick);
  }
  setProperties() {
    const cardTemplate = this._cardSelector.content.querySelector(".elements__card"); //content inside template
    const cardElement = cardTemplate.cloneNode(true);
    const cardTitle = cardElement.querySelector(".elements__title");
    const likeButton = cardElement.querySelector(".elements__like-button");
    const cardImg = cardElement.querySelector(".elements__card-photo");

    const trashButton = cardElement.querySelector(".elements__trash-button");
    trashButton.addEventListener("click", () => {
      this._handleDeleteClick();
    });

    if (this._data.isLiked) {
      likeButton.classList.toggle("element__like-button_is-active");
    }

    cardImg.addEventListener("click", () => this._handleImageClick(this._name, this._link));

    //function to delete each card
    cardImg.src = this._link;
    cardTitle.textContent = this._name;
    trashButton.addEventListener("click", (evt) => {
      evt.target.closest(".elements__card").remove();
    });

    //function to like a card
    likeButton.addEventListener("click", () => {
      api
        .likeCard(this._data) /*/llamada al api*/
        .then((rest) => {
          /*then manejar una rta asincrona(se necesita un callback funcion q se pasa como parametro rest es la rta del api*/
          this._data = rest; //se actualiza la info de la carta
        });
      likeButton.classList.toggle("element__like-button_is-active");
    });
    return cardElement;
  }
}

/*initialCards.forEach((data) => {
  renderCard(data, cardsContainer);
});*/
/*
function renderCard(data, cardsContainer) {
  cardsContainer.prepend(getCardElement(data));
}*/

// Toggle the "liked" class which changes the color
function like() {
  like.styleBackgroundColor = "black";
}

export default Card;
