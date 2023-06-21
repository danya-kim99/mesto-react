import React from "react";

function ImagePopup(props) {
  return (
    <div className={`popup popup_type_image ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__container_image">
        <img className="popup__image" src={props.link}/>
        <h2 className="popup__title popup__title_image" />
        <button
          type="button"
          className="popup__close-button popup__close-button_image"
          onClick={props.onClose}
        />
      </div>
    </div>
  );
}

export default ImagePopup;
