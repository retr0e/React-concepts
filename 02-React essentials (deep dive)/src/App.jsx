import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";

import { useState } from "react";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  // Lifting the state up (over here)
  // to manage the information that is needed in multiple components
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      // It is not a good idea to use another state in the state update (margeing different states)
      // For example if we use "activePlayer" state instead of solution below
      // because there is no guarantee for this state to be te lates value
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
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
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
