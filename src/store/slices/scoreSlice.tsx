import { createSlice } from "@reduxjs/toolkit";

export interface ScoreState {
  value: number;
}

const initialState: ScoreState = {
  value: 0,
};

export const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = scoreSlice.actions;

export default scoreSlice.reducer;
