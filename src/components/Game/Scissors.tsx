import { faHandScissors } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../styles/Game.scss";

function Scissors() {
  return (
    <div className="choice choice-scissors" data-cy="scissors">
      <FontAwesomeIcon icon={faHandScissors} />
    </div>
  );
}

export default Scissors;
