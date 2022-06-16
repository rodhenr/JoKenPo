import { RootState } from "../store/store";
import { useSelector } from "react-redux";

import "../styles/Rounds.scss";

function Rounds() {
  const gameResult = useSelector((state: RootState) => state.game);
  const roundInfo = gameResult.roundInfo;

  const getChoice = (i: string) => {
    if (i === "pedra") {
      return (
        <div className="round-rock">
          <p>{i.toUpperCase()}</p>
        </div>
      );
    } else if (i === "papel") {
      return (
        <div className="round-paper">
          <p>{i.toUpperCase()}</p>
        </div>
      );
    } else {
      return (
        <div className="round-scissors">
          <p>{i.toUpperCase()}</p>
        </div>
      );
    }
  };

  return (
    <div className="rounds-container">
      <div className="rounds">
        <div className="rounds-player">
          <p className="round-title">JOGADOR</p>
          {roundInfo
            .slice(0)
            .reverse()
            .map((i) => {
              return getChoice(i.playerChoice);
            })}
        </div>
        <div className="rounds-computer">
          <p className="round-title">COMPUTADOR</p>
          {roundInfo
            .slice(0)
            .reverse()
            .map((i) => {
              return getChoice(i.computerChoice);
            })}
        </div>
        <div className="rounds-situation">
          <p className="round-title">SITUAÇÃO</p>
          {roundInfo
            .slice(0)
            .reverse()
            .map((i) => {
              return (
                <div className="rounds">
                  <p>{i.situation.toUpperCase()}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Rounds;
