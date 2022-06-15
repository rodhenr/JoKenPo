import Game from "./components/Game/Game";
import Rules from "./components/Rules";
import Score from "./components/Score";
import "./App.css";

function App() {
  return (
    <div>
      <Score />
      <Game />
      <Rules />
    </div>
  );
}

export default App;
