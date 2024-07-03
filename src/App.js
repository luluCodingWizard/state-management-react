import "./App.css";
import { useReducer } from "react";

// step 1: initial state
const initialState = { score: 0 };

// step 2: define the reducer

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return {
        ...state,
        score: state.score + 1,
      };
    case "decrease":
      return {
        ...state,
        score: state.score - 1,
      };
    case "reset":
      return {
        ...state,
        score: 0,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const increaseScore = () => {
    dispatch({ type: "increase" });
  };
  const decreaseScore = () => {
    dispatch({ type: "decrease" });
  };
  const resetScore = () => {
    dispatch({ type: "reset" });
  };
  return (
    <div className="App">
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Clicker Game</h1>
        <p>Your score: {state.score}</p>
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
