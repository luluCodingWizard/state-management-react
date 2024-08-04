import React from "react";
import { useSelector } from "react-redux";

const ParentB = () => {
  const score = useSelector((state) => state.score.score);
  return <div>ParentB: {score}</div>;
};

export default ParentB;
