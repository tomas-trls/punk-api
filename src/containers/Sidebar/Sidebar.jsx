import React from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
import FilterList from "../FilterList/FilterList";
import "./Sidebar.scss";

const Sidebar = (props) => {
  const { handleSearch } = props;
  return (
    <div className="beers__sidebar sidebar">
      <Searchbar handleSearch={handleSearch} />
      <FilterList />
    </div>
  );
};

export default Sidebar;
