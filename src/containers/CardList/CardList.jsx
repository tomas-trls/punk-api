import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import "./CardList.scss";

const CardList = (props) => {
  const { beersArr } = props;

  const beersJSX = beersArr.map((beer) => {
    return (
      <Link to={`/beer/${beer.id}`} key={beer.id} className="card__link">
        <Card
          beerName={beer.name}
          beerImage={beer.image_url}
          beerTagline={beer.tagline}
        />
      </Link>
    );
  });

  return (
    <>
      <div className="main__card-list">{beersJSX}</div>
    </>
  );
};

export default CardList;
