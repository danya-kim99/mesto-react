import React from "react";

function Main(props) {
  return (
    <main className="main">
      <section className="profile">
        <button className="profile__avatar" onClick={props.onEditAvatar} />
        <div className="profile__info">
          <h1 className="profile__name">Вы прекрасны</h1>
          <button type="button" className="profile__edit-button" onClick={props.onEditProfile} />
          <p className="profile__profession">Загружаем...</p>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}/>
      </section>
      <section className="elements">
        <div className="spinner">
          <i />
        </div>
      </section>
    </main>
  );
}

export default Main;
