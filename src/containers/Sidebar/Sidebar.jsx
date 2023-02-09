import React from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
import FilterList from "../FilterList/FilterList";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="beers__sidebar sidebar">
      <Searchbar />
      <FilterList />
    </div>
  );
};

export default Sidebar;
