import closeButton from "../../../../../../images/close-Icon.png";

function ImagePopup(props) {
  const { onClose, title, children } = props;
  return (
    <div className="popup" id="popup__image">
      <div className="popup__image">
        <img alt="" className="popupimage" src="#" />
        <p id="popup__caption" className="popup__caption"></p>
      </div>
    </div>
  );
}

export default ImagePopup;
