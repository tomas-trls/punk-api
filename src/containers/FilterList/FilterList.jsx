import React from "react";
import FilterItem from "../../components/FilterItem/FilterItem";
import "./FilterList.scss";

const FilterList = (props) => {
  const { handleSortHighAlcohol, handleSortClassicRange, handleAcidity } =
    props;

  return (
    <div className="sidebar__filter-list">
      <FilterItem
        handleSortHighAlcohol={handleSortHighAlcohol}
        handleSortClassicRange={handleSortClassicRange}
        handleAcidity={handleAcidity}
      />
    </div>
  );
};

export default FilterList;
