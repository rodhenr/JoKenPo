import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface gameState {
  situation: string;
  playerChoice: string;
  computerChoice: string;
  showResult: boolean;
}

const initialState: gameState = {
  situation: "",
  playerChoice: "",
  computerChoice: "",
  showResult: false,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    changeSituation: (state, action: PayloadAction<string>) => {
      state.situation = action.payload;
    },
    changePlayerChoice: (state, action: PayloadAction<string>) => {
      state.playerChoice = action.payload;
    },
    changeComputerChoice: (state, action: PayloadAction<string>) => {
      state.computerChoice = action.payload;
    },
    showResults: (state, action: PayloadAction<boolean>) => {
      state.showResult = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeSituation, changePlayerChoice, changeComputerChoice, showResults } =
  gameSlice.actions;

export default gameSlice.reducer;
