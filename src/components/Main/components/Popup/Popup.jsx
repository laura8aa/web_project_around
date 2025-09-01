import closeButton from "../../../../../images/close-Icon.png";

export default function Popup(props) {
  //los hijos son el contenido de la ventana emergente
  const { onClose, title, children } = props;
  console.log(title);
  console.log(onclose);
  return (
    <div className="popup" id="popup__person">
      <div className="popup__form" id="popup__form_profile" novalidate>
        <fieldset className="popup__fieldset">
          <button type="button" className="popup__close-button" id="close-button" onClick={onClose}>
            <img src={closeButton} alt="close button" className="popup__close-icon" />
          </button>
          <h2 className="popup__title">{title} </h2>
          {children}
        </fieldset>
      </div>
    </div>
  );
}
