import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    // Schedules a state update to opposite
    // setIsEditing(!isEditing)

    // React ensures that the most recent state value is used when functional updates are employed
    // The parameter is the guaranteed latest state value
    setIsEditing((editing) => !editing);
  };

  // React give automatially event parameter
  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  let editablePlayerName = <span className='player-name'>{playerName}</span>;

  if (isEditing) {
    //                                                          Two-way binding v
    editablePlayerName = <input type='text' required value={playerName} onChange={handleChange} />;
  }

  return (
    <li>
      <span className='player'>
        {editablePlayerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
