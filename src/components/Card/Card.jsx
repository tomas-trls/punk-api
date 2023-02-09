import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { beerName, beerImage, beerDescription, key } = props;
  console.log(beerName);
  return (
    <div className="main__card card" key={key}>
      <img
        src={beerImage}
        alt={`A detailed image of ${beerName}  `}
        className="card__image"
      />
      <div className="card__text">
        <h3 className="card__title">{beerName}</h3>
        <p className="card__description">{beerDescription}</p>
      </div>
    </div>
  );
};

export default Card;
