import React from "react";
import "./Card.scss";

const Card = () => {
  return (
    <div className="main__card card">
      <img src="" alt={`A nice beer`} className="card__image" />
      <h3 className="card__title">Best Beer</h3>
      <p className="card__description">
        Quidem aperiam quisquam, eveniet voluptatibus laborum tempora nemo
        itaque fugit quam iusto dolores accusantium?
      </p>
    </div>
  );
};

export default Card;
