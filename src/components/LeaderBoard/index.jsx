import React from "react";
import { useSelector } from "react-redux";

const LeaderBoard = () => {
  const score = useSelector((state) => state.score.score);
  return <div>you score is ........{score}</div>;
};

export default LeaderBoard;
