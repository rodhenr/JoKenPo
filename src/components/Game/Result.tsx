import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";

import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSituation,
  changePlayerChoice,
  changeComputerChoice,
  showResults,
} from "../../store/slices/gameSlice";

import "../../styles/Result.scss";

function Result() {
  const gameResult = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();

  const getComponent = (name: string) => {
    switch (name) {
      case "rock":
        return <Rock />;
      case "paper":
        return <Paper />;
      case "scissors":
        return <Scissors />;
      default:
        break;
    }
  };

  const situationResult = () => {
    switch (gameResult.situation) {
      case "Draw":
        return "EMPATE!";
      case "Win":
        return "VOCÊ VENCEU!";
      case "Lose":
        return "VOCÊ PERDEU!";
      default:
        break;
    }
  };

  const handleNewGame = () => {
    dispatch(changeSituation(""));
    dispatch(changePlayerChoice(""));
    dispatch(changeComputerChoice(""));
    dispatch(showResults(false));
  };

  return (
    <div className="result-container">
      <div className="result-choices">
        <div className="choice-player">
          {getComponent(gameResult.playerChoice)}
          <p>VOCÊ</p>
        </div>
        <div className="choice-computer">
          {getComponent(gameResult.computerChoice)}
          <p>COMPUTADOR</p>
        </div>
      </div>
      <div className="result-info">
        <p>{situationResult()}</p>
      </div>
      <div className="result-play">
        <button onClick={() => handleNewGame()}>JOGAR NOVAMENTE</button>
      </div>
    </div>
  );
}

export default Result;
