import { useState } from "react";
import "./App.scss";
import Main from "./containers/Main/Main";
import Sidebar from "./containers/Sidebar/Sidebar";
import beers from "./data/punk";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardInfo from "./containers/CardInfo/CardInfo";

const App = () => {
  const [beersCard, setBeersCard] = useState(beers);
  const [checkedBeers, setCheckedBeers] = useState(beers);

  const handleSearch = (event) => {
    const filterArrByNames = checkedBeers.filter((beer) => {
      return beer.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    if (event.target.value) {
      setBeersCard(filterArrByNames);
    } else {
      setBeersCard(checkedBeers);
    }
  };

  const handleSortHighAlcohol = (event) => {
    const filterArrByABV = beers.filter((beer) => {
      return beer.abv > 6;
    });
    if (event.target.checked) {
      setBeersCard(filterArrByABV);
      setCheckedBeers(filterArrByABV);
    } else {
      setBeersCard(beers);
      setCheckedBeers(beers);
    }
  };

  const handleSortClassicRange = (event) => {
    const filterArrByYear = beers.filter((beer) => {
      const firstBrewed = beer.first_brewed.split("/");
      const dateBrewed = new Date(firstBrewed[1] + "/" + firstBrewed[0]);
      return dateBrewed.getFullYear() < 2010;
    });

    if (event.target.checked) {
      setBeersCard(filterArrByYear);
    } else {
      setBeersCard(beers);
      setCheckedBeers(beers);
    }
  };

  const handleAcidity = (event) => {
    const filterArrByAcidity = beers.filter((beer) => {
      if (beer.ph) {
        return beer.ph < 4;
      }
    });

    if (event.target.checked) {
      setBeersCard(filterArrByAcidity);
    } else {
      setBeersCard(beers);
      setCheckedBeers(beers);
    }
  };

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
                <Main beersArr={beersCard} />
              </>
            }
          ></Route>
          <Route
            path="/beer/:beerId"
            element={<CardInfo beersArr={beersCard} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
