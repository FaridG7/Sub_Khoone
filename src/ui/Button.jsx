const colors = {
  white: " bg-green-200",
  red: "bg-[#bb2121]",
  green: "bg-[#65b741]",
};

function Button({ label, onClick, color }) {
  return (
    <button
      className={`${colors[color]} mx-auto mt-8  px-10 pt-2 pb-4 rounded-full border-black`}
      onClick={onClick}
    >
      <label>{label}</label>
    </button>
  );
}

export default Button;
