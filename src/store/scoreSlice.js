import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  score: 0,
  status: "idle",
  highScore: 0,
  error: "",
};
export const fetchHigherScore = createAsyncThunk(
  "score/fetchHigherScore",
  async () => {
    const response = await axios.get("https://api.example.com/highscore");
    return response.data;
  }
);
const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    increase: (state) => {
      state.score += 1;
    },
    decrease: (state) => {
      state.score -= 1;
    },
    reset: (state) => {
      state.score = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHigherScore.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHigherScore.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.highScore = action.payload;
      })
      .addCase(fetchHigherScore.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { increase, decrease, reset } = scoreSlice.actions;
export default scoreSlice.reducer;
