import closeButton from "../../../../../../images/close-Icon.png";

function EditProfile({ onClose, title }) {
  return (
    <form className="popup__form" id="popup__form_profile" novalidate>
      <fieldset className="popup__fieldset">
        <label className="popup__field">
          <input
            type="text"
            className="popup__input"
            placeholder="Nombre"
            id="name"
            minlength="2"
            maxlength="40"
            required
          />
          <span className="popup__message-error popup__name-error"></span>
        </label>

        <label className="popup__field">
          <input
            type="text"
            className="popup__input"
            placeholder="Acerca de mi"
            id="about"
            minlength="2"
            maxlength="200"
            required
          />
          <span className="popup__message-error popup__about-error"></span>
        </label>
      </fieldset>
      <button id="save" className="popup__save-button" type="submit">
        Guardar
      </button>
    </form>
  );
}

export default EditProfile;
