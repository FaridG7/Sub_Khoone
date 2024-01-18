import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";
import RowButton from "../../ui/RowButton";
import ContractForm from "../Contracts/ContractForm";
import EstateDetails from "./EstateDetails";
import EstateForm from "./EstateForm";
import { useDeleteEstate } from "./useDeleteEstate";

function PersonRow({ estate }) {
  const { isDeleting, deleteEstate } = useDeleteEstate();

  const { id: estateId, title, area, type, adType, createdAt } = estate;

  return (
    <tr>
      <Modal>
        <Modal.Open opens="estate">
          <td>{title}</td>
          <td>{area}</td>
          <td>{type}</td>
          <td>{adType}</td>
          <td>{createdAt}</td>
        </Modal.Open>
        <td>
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
            <ContractForm />
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
          <Modal.Window>
            <EstateDetails estate={estate} />
          </Modal.Window>
        </td>
      </Modal>
    </tr>
  );
}

export default PersonRow;
