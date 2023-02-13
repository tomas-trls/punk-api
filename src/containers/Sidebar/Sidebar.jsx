import React from "react";
import Button from "../../components/Button/Button";
import Searchbar from "../../components/Searchbar/Searchbar";
import FilterList from "../FilterList/FilterList";
import "./Sidebar.scss";

const Sidebar = (props) => {
  const {
    handleSearch,
    handleSortHighAlcohol,
    handleSortClassicRange,
    handleAcidity,
    // getBeers,
  } = props;
  return (
    <div className="beers__sidebar sidebar">
      <Searchbar
        handleSearch={handleSearch}
        handleSortHighAlcohol={handleSortHighAlcohol}
      />
      {/* <Button getBeers={getBeers} /> */}
      <FilterList
        handleSortHighAlcohol={handleSortHighAlcohol}
        handleSortClassicRange={handleSortClassicRange}
        handleAcidity={handleAcidity}
      />
    </div>
  );
};

export default Sidebar;
