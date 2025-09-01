import closeButton from "../../../../../../images/close-Icon.png";
import { useState } from "react";

function NewCard(props) {
  const { onClose, title, children } = props;
  return (
    <>
      <fieldset className="popup__fieldset">
        <label className="popup__field">
          <input
            type="text"
            className="popup__input"
            placeholder="Titulo"
            id="name"
            minlength="2"
            maxlength="200"
            required
          />
          <span className="popup__message-error"></span>
        </label>
        <label className="popup__field">
          <input className="popup__input" placeholder="Enlace a la imagen" id="link" type="url" required />
          <span className="popup__message-error"></span>
        </label>
      </fieldset>
      <button id="create" className="popup__save-button" type="submit">
        Crear
      </button>
    </>
  );
}

export default NewCard;
