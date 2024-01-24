import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";
import RowButton from "../../ui/RowButton";
import ContractForm from "../Contracts/ContractForm";
import EstateDetails from "./EstateDetails";
import EstateForm from "./EstateForm";
import { useDeleteEstate } from "./useDeleteEstate";

function EstateRow({ estate, isLoginned }) {
  const { isDeleting, deleteEstate } = useDeleteEstate();

  const { id: estateId, title, area, type, adType, createdAt } = estate;

  const createDate = new Date(createdAt);
  const year = createDate.getFullYear();
  const month = createDate.getMonth() + 1;
  const day = createDate.getDate();
  const fullDate = `${year}-${month}-${day}`;

  return (
    <tr className="w-full  bg-white">
      <Modal>
        <Modal.Open opens="estate">
          <td className=" border border-black px-5 font-bold">
            <button>{title}</button>
          </td>
        </Modal.Open>
        <Modal.Open opens="estate">
          <td className=" border border-black px-5 font-bold">
            <button>{area}</button>
          </td>
        </Modal.Open>
        <Modal.Open opens="estate">
          <td className=" border border-black px-5 font-bold">
            <button>{type}</button>
          </td>
        </Modal.Open>
        <Modal.Open opens="estate">
          <td className=" border border-black px-5 font-bold">
            <button>{adType}</button>
          </td>
        </Modal.Open>
        <Modal.Open opens="estate">
          <td className=" border border-black px-5 font-bold">
            <button>{fullDate}</button>
          </td>
        </Modal.Open>
        {isLoginned && (
          <td className=" border border-black px-5 font-bold">
            <Modal.Open opens="addContract">
              <RowButton type="add" />
            </Modal.Open>
            <Modal.Open opens="edit">
              <RowButton type="edit" />
            </Modal.Open>
            <Modal.Open opens="delete">
              <RowButton type="delete" />
            </Modal.Open>
            <Modal.Window name="addContract">
              <ContractForm estate={estate} />
            </Modal.Window>
            <Modal.Window name="edit">
              <EstateForm estateToEdit={estate} />
            </Modal.Window>
            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName={`ملک ${title}`}
                disabled={isDeleting}
                onConfirm={() => deleteEstate(estateId)}
              />
            </Modal.Window>
          </td>
        )}
        <Modal.Window name="estate">
          <EstateDetails estate={estate} />
        </Modal.Window>
      </Modal>
    </tr>
  );
}

export default EstateRow;
