import {
  faHandBackFist,
  faHandScissors,
  faHand,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDispatch } from "react-redux";
import { increment } from "../store/slices/scoreSlice";
import {
  changeSituation,
  changePlayerChoice,
  changeComputerChoice,
} from "../store/slices/gameSlice";

import "../styles/Game.scss";

function Game() {
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
  };

  return (
    <div className="game-container">
      <div className="choice-container">
        <div className="rock-paper">
          <div
            className="choice choice-rock"
            onClick={() => {
              play("rock");
            }}
          >
            <FontAwesomeIcon icon={faHandBackFist} />
          </div>
          <div
            className="choice choice-paper"
            onClick={() => {
              play("paper");
            }}
          >
            <FontAwesomeIcon icon={faHand} />
          </div>
        </div>
        <div
          className="choice choice-scissors"
          onClick={() => {
            play("scissors");
          }}
        >
          <FontAwesomeIcon icon={faHandScissors} />
        </div>
      </div>
    </div>
  );
}

export default Game;

// onClick={() => dispatch(increment())}
