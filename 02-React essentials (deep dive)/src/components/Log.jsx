export default function Log({ turns }) {
  return (
    <ol id='log'>
      {turns.map((turn) => (
        // When rendering object dynamicaly it is important to set a key value
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
