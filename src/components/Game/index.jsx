import React from "react";
import { useContext } from "react";
import { GameContext } from "../../GameContext";

const Game = () => {
  const { state, dispatch } = useContext(GameContext);

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
  );
};

export default Game;
