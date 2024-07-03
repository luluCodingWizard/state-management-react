import React, { useReducer, createContext } from "react";

export const GameContext = createContext();

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

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
