import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/u-turn-left-arrow.png";
import "./CardInfo.scss";

const CardInfo = (props) => {
  const { beersArr } = props;
  const { beerId } = useParams();

  const getBeer = beersArr.filter((beer) => {
    return beer.id === Number.parseInt(beerId);
  })[0];

  let startArr = [];
  let middleArr = [];
  let endArr = [];

  getBeer.ingredients.hops.forEach((h) => {
    if (h.add === "start") {
      startArr.push(h);
    } else if (h.add === "middle") {
      middleArr.push(h);
    } else {
      endArr.push(h);
    }
  });

  const startArrJSX = startArr.map((ingredient, index) => {
    let unit = "";
    if (ingredient.amount.unit === "kilograms") {
      unit = "kg";
    } else if (ingredient.amount.unit === "grams") {
      unit = "g";
    }
    return (
      <div className="card-info__ingredient-item" key={index + 1}>
        <p key={index + 1} className="card-info__ingredient-item--name">
          {ingredient.name}
        </p>
        <div className="card-info__ingredient-item--amount">
          <p className="card-info__ingredient-item--value">
            {ingredient.amount.value} {unit}
          </p>
        </div>
      </div>
    );
  });

  const middleArrJSX = middleArr.map((ingredient, index) => {
    let unit = "";
    if (ingredient.amount.unit === "kilograms") {
      unit = "kg";
    } else if (ingredient.amount.unit === "grams") {
      unit = "g";
    }
    return (
      <div className="card-info__ingredient-item" key={index + 1}>
        <p key={index + 1} className="card-info__ingredient-item--name">
          {ingredient.name}
        </p>
        <div className="card-info__ingredient-item--amount">
          <p className="card-info__ingredient-item--value">
            {ingredient.amount.value} {unit}
          </p>
        </div>
      </div>
    );
  });

  const endArrJSX = endArr.map((ingredient, index) => {
    let unit = "";
    if (ingredient.amount.unit === "kilograms") {
      unit = "kg";
    } else if (ingredient.amount.unit === "grams") {
      unit = "g";
    }
    return (
      <div className="card-info__ingredient-item" key={index + 1}>
        <p key={index + 1} className="card-info__ingredient-item--name">
          {ingredient.name}
        </p>
        <div className="card-info__ingredient-item--amount">
          <p className="card-info__ingredient-item--value">
            {ingredient.amount.value} {unit}
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
      <div className="card-info__ingredient-item" key={index + 1}>
        <p className="card-info__ingredient-item--name">{m.name}</p>
        <div className="card-info__ingredient-item--amount">
          <p className="card-info__ingredient-item--value">
            {m.amount.value} {unit}
          </p>
        </div>
      </div>
    );
  });

  const getFoodPairingJSX = getBeer.food_pairing.map((food, index) => {
    return (
      <li className="card-info__food-pairings--data" key={index + 1}>
        {food}
      </li>
    );
  });

  return (
    <div className="card-info-page">
      <div className="card-info">
        <figure className="card-info__image-container">
          <Link to="/" className="card-info__nav-arrow">
            <img
              src={arrow}
              alt="arrow to go back to main menu"
              className="card-info__nav-arrow--image"
            />
          </Link>
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
        <div className="card-info__description">{getBeer.description}</div>
        <div className="card-info__stats-container">
          <div className="card-info__stat">
            <div className="card-info__stat--label">Alcohol by Volume</div>
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
        <details className="card-info__ingredients">
          <summary className="card-info__ingredients--title">Ingredients</summary>
          <div className="card-info__ingredient">
            <h3 className="card-info__ingredient--header">Hops</h3>
            <h4 className="card-info__ingredient--added-time">Added at the Start</h4>
            <div className="card-info__ingredient--data">{startArrJSX}</div>
            <h4 className="card-info__ingredient--added-time">
              Added in the Middle
            </h4>
            <div className="card-info__ingredient--data">{middleArrJSX}</div>
            <h4 className="card-info__ingredient--added-time">Added at the End</h4>
            <div className="card-info__ingredient--data">{endArrJSX}</div>
            <h3 className="card-info__ingredient--header">Malts</h3>
            <div className="card-info__ingredient--data">{getMaltJSX}</div>
            <h3 className="card-info__ingredient--header">Yeast</h3>
            <div className="card-info__ingredient--data">
              {getBeer.ingredients.yeast}
            </div>
          </div>
        </details>
        <details className="card-info__food-pairings">
          <summary className="card-info__food-pairings--header">
            Food Pairings
          </summary>
          <p className="card-info__food-pairings--text">
            <em>
              If you are looking for some nice foods that would match this{" "}
              <strong>beer</strong>, we recommend a few meals like:
            </em>
          </p>
          <ul>{getFoodPairingJSX}</ul>
        </details>
      </div>
      <div className="card-info__brewers-tips">
        <h2 className="card-info__brewers-tips--header">Brewers Tips</h2>
        <p className="card-info__brewers-tips--text">{getBeer.brewers_tips}</p>
      </div>
    </div>
  );
};

export default CardInfo;
