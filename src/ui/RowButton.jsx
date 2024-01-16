import { IoIosAdd } from "react-icons/io";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";

function RowButton({ type, onClick }) {
  if (type === "add")
    return (
      <button>
        <IoIosAdd />
      </button>
    );
  if (type === "edit")
    return (
      <button>
        <GrEdit />
      </button>
    );
  if (type === "delete")
    return (
      <button>
        <RiDeleteBinLine />
      </button>
    );
}

export default RowButton;
