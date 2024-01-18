import { IoIosAdd } from "react-icons/io";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";

const Icons = {
  add: <IoIosAdd />,
  edit: <GrEdit />,
  delete: <RiDeleteBinLine />,
};

function RowButton({ type, onClick }) {
  return <button onClick={onClick}>{Icons[type]}</button>;
}

export default RowButton;
