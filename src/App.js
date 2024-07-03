import "./App.css";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const increaseScore = () => {
    setScore(score + 1);
  };
  const decreaseScore = () => {
    setScore(score - 1);
  };
  const resetScore = () => {
    setScore(0);
  };
  return (
    <div className="App">
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Clicker Game</h1>
        <p>Your score: {score}</p>
        <button onClick={increaseScore} style={{ marginRight: "10px" }}>
          Increase Score
        </button>
        <button onClick={decreaseScore} style={{ marginRight: "10px" }}>
          Decrease Score
        </button>
        <button onClick={resetScore}>Reset Score</button>
      </div>
    </div>
  );
}

export default App;
