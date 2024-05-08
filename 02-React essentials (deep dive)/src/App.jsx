import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import { useState } from "react";

function App() {
  // Lifting the state up (over here)
  // to manage the information that is needed in multiple components
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((currentlyActivePlayer) => (currentlyActivePlayer === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          {/* Lifting the state up (over here pt.1) */}
          <Player initialName='Player 1' symbol='X' isActive={activePlayer === "X"} />
          {/* Lifting the state up (over here pt.2) */}
          <Player initialName='Player 2' symbol='O' isActive={activePlayer === "O"} />
        </ol>
        {/* Lifting the state up (over here pt.3) */}
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>
      LOG
    </main>
  );
}

export default App;
