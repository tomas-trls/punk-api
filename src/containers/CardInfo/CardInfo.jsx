import React from "react";
import { useParams } from "react-router";
import "./CardInfo.scss";

const CardInfo = (props) => {
  const { beersArr } = props;
  const { beerId } = useParams();

  const getBeer = beersArr.filter((beer) => {
    return beer.id === Number.parseInt(beerId);
  })[0];
  return (
    <div className="card-info">
      <img src={getBeer.image_url} alt={`A detailed bottle of ${getBeer.name}  `} />
      <h3 className="card-info__title">{getBeer.name}</h3>
      <p className="card-info__tagline">
        <em>{getBeer.tagline}</em>
      </p>
    </div>
  );
};

export default CardInfo;
