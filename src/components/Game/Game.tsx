import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";
import Result from "./Result";

import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../store/slices/scoreSlice";
import {
  changeSituation,
  changePlayerChoice,
  changeComputerChoice,
  showResults,
} from "../../store/slices/gameSlice";

import "../../styles/Game.scss";

function Game() {
  const gameStore = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();

  const play = (playerChoice: string): void => {
    const rand = Math.ceil(Math.random() * 3);

    const randChoice = (n: number) => {
      if (n === 1) {
        return "rock";
      } else if (n === 2) {
        return "paper";
      } else {
        return "scissors";
      }
    };

    const computerChoice = randChoice(rand);

    if (playerChoice === computerChoice) {
      dispatch(changeSituation("Draw"));
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")
    ) {
      dispatch(changeSituation("Win"));
      dispatch(increment());
    } else {
      dispatch(changeSituation("Lose"));
    }
    dispatch(changePlayerChoice(playerChoice));
    dispatch(changeComputerChoice(computerChoice));
    dispatch(showResults(true));
  };

  return (
    <div className="game-container">
      {gameStore.showResult ? (
        <Result />
      ) : (
        <div className="choice-container">
          <div className="rock-paper">
            <div
              onClick={() => {
                play("rock");
              }}
            >
              <Rock />
            </div>
            <div
              onClick={() => {
                play("paper");
              }}
            >
              <Paper />
            </div>
          </div>
          <div
            onClick={() => {
              play("scissors");
            }}
          >
            <Scissors />
          </div>
        </div>
      )}
    </div>
  );
}

export default Game;
