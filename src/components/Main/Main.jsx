import avatar from "../../../images/avatar.png";
import editButton from "../../../images/Edit-button.png";
import addButton from "../../../images/Add-button.png";
import { useState } from "react";
import ImagePopup from "./components/Popup/ImagePopup/ImagePopup";
import NewCard from "./components/Popup/NewCard/NewCard";
import EditAvatar from "./components/Popup/EditAvatar/EditAvatar";
import EditProfile from "./components/Popup/EditProfile/EditProfile";
import Popup from "./components/Popup/Popup";

//titles, la x no cierra,no salen las cards, no sale popup en editavatar
const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);

function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editAvatar = { title: "Cambiar foto de perfil", children: <EditAvatar /> };
  const imagePopup = { children: <ImagePopup /> };
  const editProfile = { title: "Cambiar perfil", children: <EditProfile /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img className="profile__image" src={avatar} alt="Jacques photo" />

          <button className="profile__button"></button>
        </div>
        <div className="profile__info">
          <p id="profile-name" className="profile__info-name">
            Jacques Cousteau
          </p>
          <img
            className="profile__edit-button"
            src={editButton}
            alt="Icono editar perfil"
            id="edit-button"
            onClick={() => handleOpenPopup(editProfile)}
          />
          <div>
            <img
              src={addButton}
              alt="icono adicionar informacion"
              className="profile__add-button"
              id="add-button"
              onClick={() => handleOpenPopup(newCardPopup)}
            />
          </div>
          <p id="profile-info" className="profile__info-ocupation">
            Explorador
          </p>
        </div>
      </section>
      <section className="elements" id="elements"></section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
export default Main;
