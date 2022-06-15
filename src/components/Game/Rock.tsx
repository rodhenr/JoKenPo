import { faHandBackFist } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../styles/Game.scss";

function Rock() {
  return (
    <div className="choice choice-rock">
      <FontAwesomeIcon icon={faHandBackFist} />
    </div>
  );
}

export default Rock;
