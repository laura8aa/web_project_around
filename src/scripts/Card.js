class Card {
  constructor(data, cardSelector, handleImageClick, handleDeleteClick, handleLikeClick) {
    this._data = data;
    this._id = data._id;
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = document.querySelector(cardSelector);
    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  removeCard = () => {
    this._cardElement.remove();
  };

  setProperties() {
    const cardTemplate = this._cardSelector.content.querySelector(".elements__card"); //content inside template
    this._cardElement = cardTemplate.cloneNode(true);
    const cardTitle = this._cardElement.querySelector(".elements__title");

    const cardImg = this._cardElement.querySelector(".elements__card-photo");

    const trashButton = this._cardElement.querySelector(".elements__trash-button");
    trashButton.addEventListener("click", () => {
      this._handleDeleteClick(this._id, this);
      close();
      /* likeButton.classList.toggle("element__like-button_is-active");*/
      //BORRA LA CARTA DIRECTO
    });

    const likeButton = this._cardElement.querySelector(".elements__like-button");
    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("element__like-button_is-active");
      api.likeCard(Card);
    });
    /* if (this._data.isLiked) {
        likeButton.classList.toggle("element__like-button_is-active");
      };*/

    cardImg.addEventListener("click", () => this._handleImageClick(this._name, this._link));

    //function to delete each card
    cardImg.src = this._link;
    cardTitle.textContent = this._name;
    /* trashButton.addEventListener("click", (evt) => {
      evt.target.closest(".elements__card").remove();
    });*/

    //function to like a card
    likeButton.addEventListener("click", () => {
      this._handleLikeClick();
    });
    return this._cardElement;
  }
}

/*initialCards.forEach((data) => {
  renderCard(data, cardsContainer);
});*/
/*
function renderCard(data, cardsContainer) {
  cardsContainer.prepend(getCardElement(data));
}*/

export default Card;
