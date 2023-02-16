import React from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
import FilterList from "../FilterList/FilterList";
import "./Sidebar.scss";

const Sidebar = ({
  handleSearch,
  handleSortHighAlcohol,
  handleSortClassicRange,
  handleAcidity,
  handleRangeByABV,
  handleRangeByYears,
  handleRangeByPh,
  valueABV,
  valueYears,
  valuePh,
}) => {
  return (
    <div className="beers__sidebar sidebar">
      <Searchbar handleSearch={handleSearch} />

      <FilterList
        handleRangeByABV={handleRangeByABV}
        handleRangeByYears={handleRangeByYears}
        handleRangeByPh={handleRangeByPh}
        handleSortHighAlcohol={handleSortHighAlcohol}
        handleSortClassicRange={handleSortClassicRange}
        handleAcidity={handleAcidity}
        valueABV={valueABV}
        valueYears={valueYears}
        valuePh={valuePh}
      />
    </div>
  );
};

export default Sidebar;
