import React from "react";
import CardList from "../CardList/CardList";
import "./Main.scss";

const Main = (props) => {
  const { beersArr } = props;
  return (
    <div className="beers__main main">
      <CardList beersArr={beersArr} />
    </div>
  );
};

export default Main;
