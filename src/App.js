import "./App.css";
import Game from "./components/Game";
import { Provider } from "react-redux";
import store from "./store/store";
import LeaderBoard from "./components/LeaderBoard";
import ParentB from "./components/ParentB";
import ParentA from "./components/ParentA";

function App() {
  return (
    <Provider store={store} className="App">
      <Game />
      <br />
      <LeaderBoard />
      <ParentA />
      <ParentB />
    </Provider>
  );
}

export default App;
