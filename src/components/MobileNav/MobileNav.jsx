import React from "react";
import cross from "../../assets/images/cross.svg";
import Searchbar from "../../components/Searchbar/Searchbar";
import FilterList from "../../containers/FilterList/FilterList";

import "./MobileNav.scss";

const MobileNav = ({
  handleSearch,
  handleSortHighAlcohol,
  handleSortClassicRange,
  handleAcidity,
  handleMobileNav,
  valueABV,
  valueYears,
  valuePh,
  handleRangeByABV,
  handleRangeByYears,
  handleRangeByPh,
}) => {
  return (
    <div className="beers__sidebar mobile-navbar">
      <figure className="mobile-navbar__cross-container">
        <img
          src={cross}
          alt="cross icon"
          className="mobile-navbar__cross"
          onClick={handleMobileNav}
        />
      </figure>
      <Searchbar handleSearch={handleSearch} />

      <FilterList
        handleSortHighAlcohol={handleSortHighAlcohol}
        handleSortClassicRange={handleSortClassicRange}
        handleAcidity={handleAcidity}
        valueABV={valueABV}
        valueYears={valueYears}
        valuePh={valuePh}
        handleRangeByABV={handleRangeByABV}
        handleRangeByYears={handleRangeByYears}
        handleRangeByPh={handleRangeByPh}
      />
    </div>
  );
};

export default MobileNav;
