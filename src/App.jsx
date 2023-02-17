import { useEffect, useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import MobileNav from "./components/MobileNav/MobileNav";

import CardInfo from "./containers/CardInfo/CardInfo";
import Main from "./containers/Main/Main";
import Sidebar from "./containers/Sidebar/Sidebar";

import beersArr from "./data/punk";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [beersByABV, setBeersByABV] = useState(false);
  const [beersByYear, setBeersByYear] = useState(false);
  const [beersByAcidity, setBeersByAcidity] = useState(false);

  const [beers, setBeers] = useState(beersArr);
  const [mobileNav, setMobileNav] = useState(false);
  const [rangeABVInput, setRangeABVInput] = useState(1);
  const [rangeYearsInput, setRangeYearsInput] = useState(2010);
  const [rangePhInput, setrangePhInput] = useState(5);

  useEffect(() => {
    const getBeers = async () => {
      const url = "https://api.punkapi.com/v2/beers";
      const res = await fetch(url + "?page=3&per_page=80");
      const data = await res.json();
      setBeers(data);
    };
    getBeers();
  }, []);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  const handleSearch = (event) => setSearchText(event.target.value);
  const handleSortHighAlcohol = (event) => {
    setBeersByABV(event.target.checked);
    setRangeABVInput(6);
  };
  const handleSortClassicRange = (event) => {
    setBeersByYear(event.target.checked);
    setRangeYearsInput(2010);
  };
  const handleAcidity = (event) => {
    setBeersByAcidity(event.target.checked);
    setrangePhInput(4);
  };

  const handleRangeByABV = (event) => {
    setBeersByABV(true);
    setRangeABVInput(event.target.value);
  };
  const handleRangeByYears = (event) => {
    setBeersByYear(true);
    setRangeYearsInput(event.target.value);
  };
  const handleRangeByPh = (event) => {
    setBeersByAcidity(true);
    setrangePhInput(event.target.value);
  };

  const filterBeers = beers
    .filter((beer) => beer.image_url)
    .filter((beer) => beer.name.toLowerCase().includes(searchText.toLowerCase()))
    .filter((beer) => !beersByABV || beer.abv > Number.parseInt(rangeABVInput))
    .filter(
      (beer) =>
        !beersByYear ||
        new Date(
          beer.first_brewed.split("/")[1] + "/" + beer.first_brewed.split("/")[0]
        ).getFullYear() < Number.parseInt(rangeYearsInput)
    )
    .filter(
      (beer) =>
        !beersByAcidity || (beer.ph && beer.ph < Number.parseFloat(rangePhInput))
    );
  return (
    <div className="App beers">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Sidebar
                  handleSearch={handleSearch}
                  handleSortHighAlcohol={handleSortHighAlcohol}
                  handleSortClassicRange={handleSortClassicRange}
                  handleAcidity={handleAcidity}
                  valueABV={rangeABVInput}
                  valueYears={rangeYearsInput}
                  valuePh={rangePhInput}
                  handleRangeByABV={handleRangeByABV}
                  handleRangeByYears={handleRangeByYears}
                  handleRangeByPh={handleRangeByPh}
                />
                {mobileNav && (
                  <MobileNav
                    handleSearch={handleSearch}
                    handleSortHighAlcohol={handleSortHighAlcohol}
                    handleSortClassicRange={handleSortClassicRange}
                    handleAcidity={handleAcidity}
                    handleMobileNav={handleMobileNav}
                    valueABV={rangeABVInput}
                    valueYears={rangeYearsInput}
                    valuePh={rangePhInput}
                    handleRangeByABV={handleRangeByABV}
                    handleRangeByYears={handleRangeByYears}
                    handleRangeByPh={handleRangeByPh}
                  />
                )}
                {beers && (
                  <Main beersArr={filterBeers} handleMobileNav={handleMobileNav} />
                )}
              </>
            }
          ></Route>
          <Route path="/beer/:beerId" element={<CardInfo beersArr={beers} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
