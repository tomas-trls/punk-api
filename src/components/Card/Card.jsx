import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { beerName, beerImage, beerTagline, key } = props;
  return (
    <div className="main__card card" key={key}>
      <span className="card__front">
        <img
          src={beerImage}
          alt={`A detailed image of ${beerName}  `}
          className="card__image"
        />
        <div className="card__text">
          <h3 className="card__title">{beerName}</h3>
          <p className="card__description">
            <em>{beerTagline}</em>
          </p>
        </div>
      </span>
    </div>
  );
};

export default Card;
