import "./App.css";

function App() {
  const increaseScore = () => {};
  const decreaseScore = () => {};
  const resetScore = () => {};
  return (
    <div className="App">
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Clicker Game</h1>
        <p>Your score: {10}</p>
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
