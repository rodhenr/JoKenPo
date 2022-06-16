import Game from "./components/Game/Game";
import Score from "./components/Score";
import Rounds from "./components/Rounds";
import "./App.css";

function App() {
  return (
    <div>
      <Score />
      <Game />
      <Rounds />
    </div>
  );
}

export default App;
