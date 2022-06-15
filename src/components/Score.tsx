import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import "../styles/Score.scss";

function Score() {
  const score = useSelector((state: RootState) => state.score.value);

  return (
    <div className="score-container">
      <div className="score-title">
        <p>PEDRA</p>
        <p>PAPEL</p>
        <p>TESOURA</p>
      </div>
      <div className="score-points">
        <p className="points-title">PONTOS</p>
        <p className="points">{score}</p>
      </div>
    </div>
  );
}

export default Score;
