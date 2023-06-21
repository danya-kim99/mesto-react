import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__container_profile">
        <h2 className="popup__title">{props.title}</h2>
        <button
          type="button"
          className={`popup__close-button popup__close-button_${props.name}`}
          onClick={props.onClose}
        />
        <form className={`popup__form" name="popup__form_type_${props.name}`}>
          {props.children}
          <input
            type="submit"
            disabled=""
            value={props.buttonTitle}
            className="popup__submit"
          />
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
