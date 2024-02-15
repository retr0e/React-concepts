export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      {/* FUNCTION MUST NOT HAVE A PARANTHESES */}
      {/* Dynamic styling using props. className instead of class! */}
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
