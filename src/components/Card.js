import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="element" key={props.i}>
      <img
        className="element__image"
        style={{ backgroundImage: `url(${props.link})` }}
        onClick={handleClick}
      />
      <h2 className="element__title">{props.name}</h2>
      <button type="button" className="element__trash" />
      <button type="button" className="element__like" />
      <span className="element__number-of-likes">{props.likes.length}</span>
    </div>
  );
}

export default Card;
