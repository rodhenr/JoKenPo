import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface gameState {
  situation: string;
  playerChoice: string;
  computerChoice: string;
}

const initialState: gameState = {
  situation: "",
  playerChoice: "",
  computerChoice: "",
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
  },
});

// Action creators are generated for each case reducer function
export const { changeSituation, changePlayerChoice, changeComputerChoice } = gameSlice.actions;

export default gameSlice.reducer;
