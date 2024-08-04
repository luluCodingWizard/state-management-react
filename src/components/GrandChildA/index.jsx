import React from "react";
import { useSelector } from "react-redux";

const GrandChildA = () => {
  const score = useSelector((state) => state.score.score);
  return (
    <div>
      <h1>Grand child A</h1>
      <div>{score}</div>
    </div>
  );
};

export default GrandChildA;
