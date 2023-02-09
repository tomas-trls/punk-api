import React from "react";
import "./FilterItem.scss";

const FilterItem = () => {
  return (
    <>
      <div className="sidebar__filter-item filter-item">
        <label className="filter-item__label" htmlFor="high-alcohol">
          High Alcohol(Abv {`>`} 6.0%)
        </label>
        <input
          className="filter-item__input"
          type="checkbox"
          name="high-alcohol"
          id="high-alcohol"
        />
      </div>
      <div className="sidebar__filter-item filter-item">
        <label className="filter-item__label" htmlFor="classic">
          Classic Range
        </label>
        <input
          className="filter-item__input"
          type="checkbox"
          name="classic"
          id="classic"
        />
      </div>
      <div className="sidebar__filter-item filter-item">
        <label className="filter-item__label" htmlFor="acidicity">
          Acidic (ph {"<"} 4)
        </label>
        <input
          className="filter-item__input"
          type="checkbox"
          name="acidicity"
          id="acidicity"
        />
      </div>
    </>
  );
};

export default FilterItem;
