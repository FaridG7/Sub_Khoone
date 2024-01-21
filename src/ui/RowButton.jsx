import { IoIosAdd } from "react-icons/io";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";

const Icons = {
  add: <IoIosAdd size="23px" />,
  edit: <GrEdit size="23px" />,
  delete: <RiDeleteBinLine size="23px" />,
};

function RowButton({ type, onClick }) {
  return (
    <button className="m-2" onClick={onClick}>
      {Icons[type]}
    </button>
  );
}

export default RowButton;
