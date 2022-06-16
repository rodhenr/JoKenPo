import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface roundState {
  playerChoice: string;
  computerChoice: string;
  situation: string;
}

export interface gameState {
  roundInfo: roundState[];
  showResult: boolean;
}

const initialState: gameState = {
  roundInfo: [],
  showResult: false,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addRound: (state, action: PayloadAction<roundState>) => {
      state.roundInfo.push(action.payload);
    },
    showResults: (state, action: PayloadAction<boolean>) => {
      state.showResult = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showResults, addRound } = gameSlice.actions;

export default gameSlice.reducer;
