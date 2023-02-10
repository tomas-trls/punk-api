import { useState } from "react";
import "./App.scss";
import Main from "./containers/Main/Main";
import Sidebar from "./containers/Sidebar/Sidebar";
import beers from "./data/punk";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [beersCard, setBeersCard] = useState(beers);

  const handleSearch = (event) => {
    const filterArrByNames = beers.filter((beer) => {
      return beer.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    if (event.target.value) {
      setBeersCard(filterArrByNames);
    } else {
      setBeersCard(beers);
    }
  };

  const handleSortHighAlcohol = (event) => {
    const filterArrByABV = beers.filter((beer) => {
      return beer.abv > 6;
    });
    if (event.target.checked) {
      setBeersCard(filterArrByABV);
    } else {
      setBeersCard(beers);
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
    }
  };

  const handleAcidity = (event) => {
    const filterArrByAcidity = beers.filter((beer) => {
      return beer.ph < 4;
    });

    if (event.target.checked) {
      setBeersCard(filterArrByAcidity);
    } else {
      setBeersCard(beers);
    }
  };

  return (
    <div className="App beers">
      <Sidebar
        handleSearch={handleSearch}
        handleSortHighAlcohol={handleSortHighAlcohol}
        handleSortClassicRange={handleSortClassicRange}
        handleAcidity={handleAcidity}
      />
      <Main beersArr={beersCard} />
    </div>
  );
};

export default App;
