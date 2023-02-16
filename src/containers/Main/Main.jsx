import React from "react";
import menu from "../../assets/images/menu.svg";
import CardList from "../CardList/CardList";
import "./Main.scss";

const Main = (props) => {
  const { beersArr, handleMobileNav } = props;
  return (
    <div className="beers__main main">
      <figure className="main__menu-container">
        <img
          src={menu}
          alt="menu icon"
          className="main__menu"
          onClick={handleMobileNav}
        />
      </figure>
      <CardList beersArr={beersArr} />
    </div>
  );
};

export default Main;
