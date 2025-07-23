class Api {
  constructor(headers, baseURL) {
    this.headers = headers;
    this.baseURL = baseURL;
  }
  getInitialCards() {
    return fetch(this.baseURL + "/cards", { headers: this.headers }) //fetch metodo nativo de js
      .then((res) => {
        if (!res.ok) {
          return Promise.reject("error");
        }
        return res.json();
      })
      .then((res) => {
        return res;
      });
  }
  getUser() {
    //obtiene la info original del usuario
    return fetch(this.baseURL + "/users/me", { headers: this.headers }) //
      .then((res) => {
        if (!res.ok) {
          return Promise.reject("error");
        }
        return res.json();
      })
      .then((res) => {
        return res;
      });
  }
  editUser(name, about) {
    //esto es para poder editar el usuario
    return fetch(this.baseURL + "/users/me", {
      headers: this.headers,
      method: "PATCH",
      body: JSON.stringify({ name, about }), //lugar donde se manda la info
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject("error");
        }
        return res.json();
      })
      .then((res) => {
        return res;
      });
  }
  addCard(name, link) {
    //esto es para crear una nueva carta
    return fetch(this.baseURL + "/cards", {
      headers: this.headers,
      method: "POST",
      body: JSON.stringify({ name, link }), //lugar donde se manda la info. con stringify todo lo convierte en string. Formato que entiende el backend
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject("error");
        }
        return res.json();
      })
      .then((res) => {
        return res;
      });
  }
  //INTENTO 1LIKE
  likeCard(card) {
    //metodo para like a card
    return fetch(this.baseURL + "/cards/" + card._id + "/likes", {
      headers: this.headers,
      method: card.isLiked ? "DELETE" : "PUT",
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject("error");
        }
        return res.json();
      })
      .then((res) => {
        return res;
      });
  }
  deleteCard(cardId) {
    //metodo para borrar carta
    return fetch(this.baseURL + "/cards/" + cardId, { headers: this.headers, method: "DELETE" }) //fetch metodo nativo de js
      .then((res) => {
        if (!res.ok) {
          return Promise.reject("error");
        }
        return res.json();
      })
      .then((res) => {
        return res;
      });
  }
}

export const api = new Api(
  {
    /*headers*/
    authorization: "38159d78-df39-4fcf-9b35-187ea8876cf2",
    "Content-Type": "application/json",
  },
  "https://around-api.es.tripleten-services.com/v1"
);
