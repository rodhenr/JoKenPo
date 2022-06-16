import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";

import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { showResults } from "../../store/slices/gameSlice";

import "../../styles/Result.scss";

function Result() {
  const gameResult = useSelector((state: RootState) => state.game);
  const roundInfo = gameResult.roundInfo;
  const lastRound = roundInfo[roundInfo.length - 1];
  const dispatch = useDispatch();

  const getComponent = (name: string) => {
    switch (name) {
      case "pedra":
        return <Rock />;
      case "papel":
        return <Paper />;
      case "tesoura":
        return <Scissors />;
      default:
        break;
    }
  };

  const situationResult = () => {
    switch (lastRound.situation) {
      case "empate":
        return "EMPATE!";
      case "vitoria":
        return "VOCÊ VENCEU!";
      case "derrota":
        return "VOCÊ PERDEU!";
      default:
        break;
    }
  };

  const handleNewGame = () => {
    dispatch(showResults(false));
  };

  return (
    <div className="result-container">
      <div className="result-choices">
        <div className="choice-player winner">
          {getComponent(lastRound.playerChoice)}
          <p>VOCÊ</p>
        </div>
        <div className="choice-computer">
          {getComponent(lastRound.computerChoice)}
          <p>COMPUTADOR</p>
        </div>
      </div>
      <div
        className={
          lastRound.situation === "vitoria"
            ? "result-info winner"
            : "result-info"
        }
      >
        <p>{situationResult()}</p>
      </div>
      <div className="result-play">
        <button onClick={() => handleNewGame()}>JOGAR NOVAMENTE</button>
      </div>
    </div>
  );
}

export default Result;
