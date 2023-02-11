import "./CardInfo.scss";
import React from "react";
import { useParams } from "react-router";

const CardInfo = (props) => {
  const { beersArr } = props;
  const { beerId } = useParams();

  const getBeer = beersArr.filter((beer) => {
    return beer.id == beerId;
  })[0];
  return (
    <div className="card-info">
      <img
        src={getBeer.image_url}
        alt={`A detailed bottle of ${getBeer.name}  `}
      />
      <h3 className="card-info__title">{getBeer.name}</h3>
      <p className="card-info__tagline">
        <em>{getBeer.tagline}</em>
      </p>
    </div>
  );
};

export default CardInfo;
