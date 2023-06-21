import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isSubmitDeletionPopupOpen, setIsSubmitDeletionPopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    console.log(isEditProfilePopupOpen)
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleSubmitDeletionClick() {
    setIsSubmitDeletionPopupOpen(!isSubmitDeletionPopupOpen);
  }



  return (
    <div className="page">
      <>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />
        <Footer />
        <div className="popup popup_type_image">
        </div>
        <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} buttonTitle='Сохранить'>
          <input
            id="name-input"
            name="name"
            className="popup__input popup__input_type_name"
            type="text"
            minLength={2}
            maxLength={40}
            placeholder="Имя"
            required=""
          />
          <span className="popup__input-error name-input-error" />
          <input
            id="profession-input"
            name="about"
            className="popup__input popup__input_type_profession"
            type="text"
            minLength={2}
            maxLength={200}
            placeholder="Профессия"
            required=""
          />
          <span className="profession-input-error popup__input-error" />
        </PopupWithForm>
        <PopupWithForm name="place" title="Новое место" isOpen={isAddPlacePopupOpen} buttonTitle='Создать'>
        <input
                id="title-input"
                name="name"
                className="popup__input popup__input_type_title"
                type="text"
                minLength={2}
                maxLength={30}
                placeholder="Название места"
                required=""
              />
              <span className="popup__input-error title-input-error" />
              <input
                id="link-input"
                name="link"
                className="popup__input popup__input_type_link"
                type="url"
                placeholder="Ссылка на изображение"
                required=""
              />
              <span className="popup__input-error link-input-error" />
        </PopupWithForm>
        <PopupWithForm name="submit-deletion" title="Вы уверены?" isOpen={isSubmitDeletionPopupOpen} buttonTitle='Да' />
        <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} buttonTitle='Сохранить'>
        <input
                id="avatar-link-input"
                name="link"
                className="popup__input popup__input_type_link"
                type="url"
                placeholder="Ссылка на изображение"
                required=""
              />
              <span className="popup__input-error avatar-link-input-error" />
        </PopupWithForm>
      </>
    </div>
  );
}

export default App;
