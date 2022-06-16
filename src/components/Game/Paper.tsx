import { faHand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../styles/Game.scss";

function Paper() {
  return (
    <div className="choice choice-paper" data-cy="paper">
      <FontAwesomeIcon icon={faHand} />
    </div>
  );
}

export default Paper;
