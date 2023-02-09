import "./App.scss";
import Main from "./containers/Main/Main";
import Sidebar from "./containers/Sidebar/Sidebar";
import beers from "./data/punk";

const App = () => {
  return (
    <div className="App beers">
      <Sidebar />
      <Main beersArr={beers} />
    </div>
  );
};

export default App;
