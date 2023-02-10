import { useState } from "react";
import "./App.scss";
import Main from "./containers/Main/Main";
import Sidebar from "./containers/Sidebar/Sidebar";
import beers from "./data/punk";

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
  return (
    <div className="App beers">
      <Sidebar handleSearch={handleSearch} />
      <Main beersArr={beersCard} />
    </div>
  );
};

export default App;
