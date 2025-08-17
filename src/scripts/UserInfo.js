/*Llevar al constructor un objeto con los selectores de dos elementos: uno que contiene
 el nombre del usuario, y otro que contiene el trabajo del usuario.
Almacenar un método público llamado getUserInfo(), que devuelve un objeto con información
 sobre el usuario. Este método será útil para casos en los que es necesario mostrar los datos 
 del usuario en el formulario abierto.
Almacena un método público llamado setUserInfo(), que toma los datos del nuevo usuario y los agrega en la página.*/

class UserInfo {
  constructor({ UserNameSelector, jobSelector, imageSelector }) {
    this._userNameSelector = document.querySelector("#profile-name");
    this._jobSelector = document.querySelector("#profile-info");
    this._imageSelector = document.querySelector(".profile__image");
  }

  getUserInfo(name, about, avatar) {
    this._userNameSelector.TextContent = name;
    this._jobSelector.TextContent = about;
    this._imageSelector.src = avatar;
  }

  setUserInfo({ name, about, avatar }) {
    this._userNameSelector.textContent = name;
    this._jobSelector.textContent = about;
    this._imageSelector.src = avatar;
  }
}
export default UserInfo;
