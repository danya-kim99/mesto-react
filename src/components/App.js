import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import { api } from "../utils/Api";
import ImagePopup from "./ImagePopup";
import Card from "./Card";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isSubmitDeletionPopupOpen, setIsSubmitDeletionPopupOpen] =
    React.useState(false);
  const [userData, setUserData] = React.useState(null);
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(null);

  React.useEffect(() => {
    api
      .getProfileInfo()
      .then((data) => {
        setUserData(data)
        console.log(userData)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleSubmitDeletionClick() {
    setIsSubmitDeletionPopupOpen(true);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null)
  }

  function handleCardClick(item) {
    console.log(item)
    setSelectedCard(item)
  }

  return (
    <div className="page">
      <>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          userData={userData}
        >
          <section className="elements">
            <div className="spinner"></div>
            {cards.map((card) => (
              <Card
                card={card}
                onCardClick={handleCardClick}
              />
            ))}
          </section>
        </Main>
        <Footer />
        <ImagePopup card={selectedCard} isOpen={selectedCard} onClose={closeAllPopups} />
        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          buttonTitle="Сохранить"
          onClose={closeAllPopups}
        >
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
        <PopupWithForm
          name="place"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          buttonTitle="Создать"
          onClose={closeAllPopups}
        >
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
        <PopupWithForm
          name="submit-deletion"
          title="Вы уверены?"
          isOpen={isSubmitDeletionPopupOpen}
          buttonTitle="Да"
        />
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          buttonTitle="Сохранить"
          onClose={closeAllPopups}
        >
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
