import React from "react";
import FilterItem from "../../components/FilterItem/FilterItem";
import RangeInput from "../../components/RangeInput/RangeInput";
import "./FilterList.scss";

const FilterList = ({
  labels,
  value,
  min,
  max,
  handleInput,
  handleSortHighAlcohol,
  handleSortClassicRange,
  handleAcidity,
}) => {
  return (
    <div className="sidebar__filter-list">
      <RangeInput
        labels={labels}
        min={min}
        max={max}
        value={value}
        onChange={handleInput}
      />
      <FilterItem
        handleSortHighAlcohol={handleSortHighAlcohol}
        handleSortClassicRange={handleSortClassicRange}
        handleAcidity={handleAcidity}
      />
    </div>
  );
};

export default FilterList;
