import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";
import RowButton from "../../ui/RowButton";
import EstateForm from "../Estates/EstateForm";
import PersonForm from "./PersonForm";
import { useDeletePerson } from "./useDeletePerson";

function PersonRow({ person }) {
  const { isDeleting, deletePerson } = useDeletePerson();

  const {
    id: personId,
    firstName,
    lastName,
    phoneNumber,
    meliCode,
    createdAt,
  } = person;

  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{phoneNumber}</td>
      <td>{meliCode}</td>
      <td>{createdAt}</td>
      <td>
        <Modal>
          <Modal.Open opens="edit">
            <RowButton type="edit" />
          </Modal.Open>
          <Modal.Open opens="delete">
            <RowButton type="delete" />
          </Modal.Open>
          <Modal.Open opens="addEstate">
            <RowButton type="add" />
          </Modal.Open>
          <Modal.Window name="addEstate">
            <EstateForm estateOwner={person} />
          </Modal.Window>
          <Modal.Window name="edit">
            <PersonForm personToEdit={person} />
          </Modal.Window>
          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="cabins"
              disabled={isDeleting}
              onConfirm={() => deletePerson(personId)}
            />
          </Modal.Window>
        </Modal>
      </td>
    </tr>
  );
}

export default PersonRow;
