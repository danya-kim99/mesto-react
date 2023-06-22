import React from "react";

function Main({userData, onEditProfile, onAddPlace, onEditAvatar, children}) {
  console.log(userData)
  return (
    <main className="main">
      <section className="profile">
        <button className="profile__avatar" style={{ backgroundImage: `url(${userData? userData.avatar : 'Загружаем...'})` }} onClick={onEditAvatar} />
        <div className="profile__info">
          <h1 className="profile__name">{userData? userData.name : "Вы прекрасны"}</h1>
          <button type="button" className="profile__edit-button" onClick={onEditProfile} />
          <p className="profile__profession">{userData? userData.about : "Загружаем..."}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlace}/>
      </section>
      <section className="elements">
            <div className="spinner"></div>
            {children}
          </section>

    </main>
  );
}

export default Main;
