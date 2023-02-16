import React from "react";
import FilterItem from "../../components/FilterItem/FilterItem";
import RangeInput from "../../components/RangeInput/RangeInput";
import "./FilterList.scss";

const FilterList = ({
  valueABV,
  valueYears,
  valuePh,
  handleRangeByYears,
  handleRangeByABV,
  handleRangeByPh,
  handleSortHighAlcohol,
  handleSortClassicRange,
  handleAcidity,
}) => {
  return (
    <div className="sidebar__filter-list">
      <div className="sidebar__filter-list--ranges">
        <RangeInput
          valueABV={valueABV}
          valueYears={valueYears}
          valuePh={valuePh}
          handleRangeByABV={handleRangeByABV}
          handleRangeByYears={handleRangeByYears}
          handleRangeByPh={handleRangeByPh}
        />
      </div>
      <div className="sidebar__filter-list--checkboxes">
        <FilterItem
          handleSortHighAlcohol={handleSortHighAlcohol}
          handleSortClassicRange={handleSortClassicRange}
          handleAcidity={handleAcidity}
        />
      </div>
    </div>
  );
};

export default FilterList;
