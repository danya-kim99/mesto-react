import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import { api } from "../utils/Api";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isSubmitDeletionPopupOpen, setIsSubmitDeletionPopupOpen] =
    React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(null);

  React.useEffect(() => {
    api
      .getProfileInfo()
      .then((data) => {
        setCurrentUser(data)
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

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
  }

  function handleCardDelete(card) {
    console.log(card)
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => {
          if (c._id !== card._id) {
            return c
          }
        }))
      })
  }

  function handleUpdateUser(formData) {
    api
      .patchProfileInfo(formData)
      .then((newCurrenUser) => {
        setCurrentUser(newCurrenUser);
        closeAllPopups();
      })
  }

  function handleUpdateAvatar(link) {
    api
      .patchProfileAvatar(link)
      .then((newCurrenUser) => {
        setCurrentUser(newCurrenUser);
        closeAllPopups();
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <>
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            cards={cards}
            onCardClick={setSelectedCard}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />
          <ImagePopup card={selectedCard} isOpen={selectedCard} onClose={closeAllPopups} />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
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
        </>
      </div>
    </CurrentUserContext.Provider>

  );
}

export default App;
