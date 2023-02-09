import "./App.scss";
import Main from "./containers/Main/Main";
import Sidebar from "./containers/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="App beers">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
