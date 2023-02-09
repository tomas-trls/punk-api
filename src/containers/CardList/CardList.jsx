import React from "react";
import Card from "../../components/Card/Card";
import "./CardList.scss";

const CardList = (props) => {
  const { beersArr } = props;

  const beersJSX = beersArr.map((beer) => {
    return (
      <Card
        key={beer.id}
        beerName={beer.name}
        beerImage={beer.image_url}
        beerDescription={beer.description}
      />
    );
  });

  return (
    <>
      <div className="main__card-list">{beersJSX}</div>
    </>
  );
};

export default CardList;
