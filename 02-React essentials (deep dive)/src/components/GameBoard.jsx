const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  // (Computed value) Deriving state from gameTurns state by props ->
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    // Destructurization of the array
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  // <-

  /*
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      // !States of objects/references should be updated in immutable way!
      // To prevent any errors or weird behaviors object/reference should be created as new
      // and all operation should be immutable
      const updatedBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });

    onSelectSquare();
  }
*/

  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
