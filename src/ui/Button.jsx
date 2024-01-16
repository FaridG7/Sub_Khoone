const colors = {
  white: "",
  red: "",
  green: "",
};

function Button({ children, onClick, color }) {
  return (
    <button className={`${colors[color]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
