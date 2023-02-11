import { useState } from "react";
import "./App.scss";
import Main from "./containers/Main/Main";
import Sidebar from "./containers/Sidebar/Sidebar";
import beers from "./data/punk";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardInfo from "./containers/CardInfo/CardInfo";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [beersByABV, setBeersByABV] = useState(false);
  const [beersByYear, setBeersByYear] = useState(false);
  const [beersByAcidity, setBeersByAcidity] = useState(false);

  const handleSearch = (event) => setSearchText(event.target.value);

  const handleSortHighAlcohol = (event) => setBeersByABV(event.target.checked);

  const handleSortClassicRange = (event) =>
    setBeersByYear(event.target.checked);

  const handleAcidity = (event) => setBeersByAcidity(event.target.checked);

  const filterBeers = beers
    .filter((beer) =>
      beer.name.toLowerCase().includes(searchText.toLowerCase())
    )
    .filter((beer) => !beersByABV || beer.abv > 6)
    .filter(
      (beer) =>
        !beersByYear ||
        new Date(
          beer.first_brewed.split("/")[1] +
            "/" +
            beer.first_brewed.split("/")[0]
        ).getFullYear() < 2010
    )
    .filter((beer) => !beersByAcidity || beer.ph < 4);

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
                />{" "}
                <Main beersArr={filterBeers} />
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
