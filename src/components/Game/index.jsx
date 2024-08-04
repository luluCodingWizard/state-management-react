import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increase,
  decrease,
  reset,
  fetchHigherScore,
} from "../../store/scoreSlice";

const Game = () => {
  const score = useSelector((state) => state.score.score);
  const dispatch = useDispatch();
  const increaseScore = () => {
    dispatch(increase());
  };
  const decreaseScore = () => {
    dispatch(decrease());
  };
  const resetScore = () => {
    dispatch(reset());
  };
  return (
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
      <button onClick={() => dispatch(fetchHigherScore())}>
        Get higher Score
      </button>
    </div>
  );
};

export default Game;
