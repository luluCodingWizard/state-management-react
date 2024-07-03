import "./App.css";
import Game from "./components/Game";
import { GameProvider } from "./GameContext";
import LeaderBoard from "./components/LeaderBoard";

function App() {
  return (
    <GameProvider className="App">
      <Game />
      <br />
      <LeaderBoard />
    </GameProvider>
  );
}

export default App;
