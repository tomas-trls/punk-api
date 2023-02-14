import React from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
import FilterList from "../FilterList/FilterList";
import "./Sidebar.scss";

const Sidebar = ({
  handleSearch,
  handleSortHighAlcohol,
  handleSortClassicRange,
  handleAcidity,
  labels,
  value,
  min,
  max,
  handleInput,
}) => {
  return (
    <div className="beers__sidebar sidebar">
      <Searchbar handleSearch={handleSearch} />

      <FilterList
        handleSortHighAlcohol={handleSortHighAlcohol}
        handleSortClassicRange={handleSortClassicRange}
        handleAcidity={handleAcidity}
        labels={labels}
        min={min}
        max={max}
        value={value}
        onChange={handleInput}
      />
    </div>
  );
};

export default Sidebar;
