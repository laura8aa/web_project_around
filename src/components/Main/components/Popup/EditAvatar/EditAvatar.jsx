import closeButton from "../../../../../../images/close-Icon.png";

function EditAvatar(onClose, title) {
  return (
    <div className="popup" id="popup__cambiarfoto">
      <form className="popup__form" id="popup__form_avatar" novalidate>
        <fieldset className="popup__fieldset">
          <label className="popup__field">
            <input
              type="text"
              className="popup__input"
              placeholder="https://somewebsite.com/someimage.jpg"
              id="avatar"
              minlength="2"
              maxlength="200"
              required
            />
          </label>
        </fieldset>
        <button id="save" className="popup__save-button" type="submit" onClick={() => handleOpenPopup(EditAvatar)}>
          Guardar
        </button>
      </form>
    </div>
  );
}

export default EditAvatar;
