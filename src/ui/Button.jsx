const colors = {
  white: "",
  red: "",
  green: "",
};

function Button({ label, onClick, color }) {
  return (
    <button className={`${colors[color]} `} onClick={onClick}>
      <label>{label}</label>
    </button>
  );
}

export default Button;
