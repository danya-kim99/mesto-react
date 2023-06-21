import React from "react";

function Main(props) {
  return (
    <main className="main">
      <section className="profile">
        <button className="profile__avatar" style={{ backgroundImage: `url(${props.userAvatar})` }} onClick={props.onEditAvatar} />
        <div className="profile__info">
          <h1 className="profile__name">{props.userName? props.userName : "Вы прекрасны"}</h1>
          <button type="button" className="profile__edit-button" onClick={props.onEditProfile} />
          <p className="profile__profession">{props.userDescription? props.userDescription : "Загружаем..."}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}/>
      </section>
      {props.children}
    </main>
  );
}

export default Main;
