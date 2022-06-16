import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";
import Result from "./Result";

import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../store/slices/scoreSlice";
import { showResults, addRound } from "../../store/slices/gameSlice";

import "../../styles/Game.scss";

function Game() {
  const gameStore = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();

  const play = (playerChoice: string): void => {
    const rand = Math.ceil(Math.random() * 3);

    const randChoice = (n: number) => {
      if (n === 1) {
        return "pedra";
      } else if (n === 2) {
        return "papel";
      } else {
        return "tesoura";
      }
    };

    const computerChoice = randChoice(rand);

    if (playerChoice === computerChoice) {
      dispatch(addRound({ playerChoice, computerChoice, situation: "empate" }));
    } else if (
      (playerChoice === "pedra" && computerChoice === "tesoura") ||
      (playerChoice === "tesoura" && computerChoice === "papel") ||
      (playerChoice === "papel" && computerChoice === "pedra")
    ) {
      dispatch(
        addRound({ playerChoice, computerChoice, situation: "vitoria" })
      );
      dispatch(increment());
    } else {
      dispatch(
        addRound({ playerChoice, computerChoice, situation: "derrota" })
      );
    }
    dispatch(showResults(true));
  };

  return (
    <div className="game-container">
      {gameStore.showResult ? (
        <Result />
      ) : (
        <div className="choice-container" data-cy="initial-game">
          <div className="rock-paper">
            <div
              onClick={() => {
                play("pedra");
              }}
            >
              <Rock />
            </div>
            <div
              onClick={() => {
                play("papel");
              }}
            >
              <Paper />
            </div>
          </div>
          <div
            onClick={() => {
              play("tesoura");
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
