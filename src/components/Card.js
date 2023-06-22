import React from "react";

function Card({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="element" key={card._id}>
      <img
        className="element__image"
        style={{ backgroundImage: `url(${card.link})` }}
        onClick={handleClick}
      />
      <h2 className="element__title">{card.name}</h2>
      <button type="button" className="element__trash" />
      <button type="button" className="element__like" />
      <span className="element__number-of-likes">{card.likes.length}</span>
    </div>
  );
}

export default Card;
