/*Llevar al constructor un objeto con los selectores de dos elementos: uno que contiene
 el nombre del usuario, y otro que contiene el trabajo del usuario.
Almacenar un método público llamado getUserInfo(), que devuelve un objeto con información
 sobre el usuario. Este método será útil para casos en los que es necesario mostrar los datos 
 del usuario en el formulario abierto.
Almacena un método público llamado setUserInfo(), que toma los datos del nuevo usuario y los agrega en la página.*/

class UserInfo {
  constructor({ UserNameSelector, jobSelector }) {
    this._userNameSelector = document.querySelector("#profile-name");
    this._jobSelector = document.querySelector("#profile-info");
  }

  getUserInfo(name, about) {
    this._userNameSelector.TextContent = name;
    this._jobSelector.TextContent = about;
  }

  setUserInfo({ name, about }) {
    this._userNameSelector.textContent = name;
    this._jobSelector.textContent = about;
  }
}
export default UserInfo;
