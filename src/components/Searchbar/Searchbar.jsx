import React from "react";
import "./Searchbar.scss";

const Searchbar = () => {
  return (
    <div className="sidebar__searchbar searchbar">
      <label htmlFor="searchbar" className="searchbar_label">
        Searchbar
      </label>
      <input type="text" name="searchbar" className="searchbar__input" />
    </div>
  );
};

export default Searchbar;
