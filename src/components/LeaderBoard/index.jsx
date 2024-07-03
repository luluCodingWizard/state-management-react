import React, { useContext } from "react";
import { GameContext } from "../../GameContext";

const LeaderBoard = () => {
  const { state } = useContext(GameContext);
  return <div>you score is ........{state.score}</div>;
};

export default LeaderBoard;
