import React from "react";
import "./Button.scss";

const Button = ({ getBeers }) => {
  return <button onClick={getBeers}>Search Beers</button>;
};

export default Button;
