import React from "react";
import { useParams } from "react-router";
import "./CardInfo.scss";

const CardInfo = (props) => {
  const { beersArr } = props;
  const { beerId } = useParams();

  const getBeer = beersArr.filter((beer) => {
    return beer.id === Number.parseInt(beerId);
  })[0];

  const getHopsJSX = getBeer.ingredients.hops.map((m, index) => {
    let unit = "";
    if (m.amount.unit === "kilograms") {
      unit = "kg";
    } else if (m.amount.unit === "grams") {
      unit = "g";
    }
    return (
      <div className="card-info__hops" key={index + 1}>
        <p className="card-info__hops--name">{m.name}</p>
        <div className="card-info__hops--amount">
          <p className="card-info__hops--value">
            {m.amount.value} {unit}
          </p>
        </div>
      </div>
    );
  });

  const getMaltJSX = getBeer.ingredients.malt.map((m, index) => {
    let unit = "";
    if (m.amount.unit === "kilograms") {
      unit = "kg";
    } else if (m.amount.unit === "grams") {
      unit = "g";
    }
    return (
      <div className="card-info__malt" key={index + 1}>
        <p className="card-info__malt--name">{m.name}</p>
        <div className="card-info__malt--amount">
          <p className="card-info__malt--value">
            {m.amount.value} {unit}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="card-info">
      <figure className="card-info__image-container">
        <img
          src={getBeer.image_url}
          alt={`A detailed bottle of ${getBeer.name}  `}
          className="card-info__image"
        />
      </figure>
      <div className="card-info__header">
        <h2 className="card-info__title">{getBeer.name}</h2>
        <p className="card-info__tagline">{getBeer.tagline}</p>
      </div>
      <div className="card-info__stats-container">
        <div className="card-info__stat">
          <div className="card-info__stat--label">ABV</div>
          <div className="card-info__stat--value">{getBeer.abv}%</div>
        </div>
        <div className="card-info__stat">
          <div className="card-info__stat--label">First Brewed</div>
          <div className="card-info__stat--value">{getBeer.first_brewed}</div>
        </div>
        <div className="card-info__stat">
          <div className="card-info__stat--label">Acidity</div>
          <div className="card-info__stat--value">{getBeer.ph}</div>
        </div>
      </div>
      <div className="card-info__ingredients">
        <h3 className="card-info__ingredients--title">Ingredients</h3>
        <div className="card-info__malts">
          <h4 className="card-info__ingredients--header">Hops</h4>
          <p className="card-info__ingredients--data">{getHopsJSX}</p>
          <h4 className="card-info__ingredients--header">Malts</h4>
          <p className="card-info__ingredients--data">{getMaltJSX}</p>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
