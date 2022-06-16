import { faHandBackFist } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../styles/Game.scss";

function Rock() {
  return (
    <div className="choice choice-rock" data-cy="rock">
      <FontAwesomeIcon icon={faHandBackFist} />
    </div>
  );
}

export default Rock;
