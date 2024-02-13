export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      {/* FUNCTION MUST NOT HAVE A PARANTHESES */}
      {/* Dynamic styling using props. className instead of class! */}
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
