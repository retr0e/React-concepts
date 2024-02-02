export default function TabButton({ children, onSelect }) {
  return (
    <li>
      {/* FUNCTION MUST NOT HAVE A PARANTHESES */}
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
