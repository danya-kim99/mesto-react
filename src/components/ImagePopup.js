import React from "react";

function ImagePopup() {
  return (
    <div className="popup popup_type_image">
      <div className="popup__container popup__container_image">
        <img className="popup__image" />
        <h2 className="popup__title popup__title_image" />
        <button
          type="button"
          className="popup__close-button popup__close-button_image"
        />
      </div>
    </div>
  );
}

export default ImagePopup;
