import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";
import RowButton from "../../ui/RowButton";
import EstateForm from "../Estates/EstateForm";
import PersonForm from "./PersonForm";
import { useDeletePerson } from "./useDeletePerson";

function PersonRow({ person, isLoginned }) {
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
    <tr className="w-full bg-white">
      <td className=" border border-black px-5 font-bold">{firstName}</td>
      <td className=" border border-black px-5 font-bold">{lastName}</td>
      <td className=" border border-black px-5 font-bold">{phoneNumber}</td>
      <td className=" border border-black px-5 font-bold">{meliCode}</td>
      <td className=" border border-black px-5 font-bold">{createdAt}</td>
      {isLoginned && (
        <td className=" border border-black px-7 font-bold">
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
              <EstateForm estateOwner={person} owner={person} />
            </Modal.Window>
            <Modal.Window name="edit">
              <PersonForm personToEdit={person} />
            </Modal.Window>
            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName={`${firstName} ${lastName}`}
                disabled={isDeleting}
                onConfirm={() => deletePerson(personId)}
              />
            </Modal.Window>
          </Modal>
        </td>
      )}
    </tr>
  );
}

export default PersonRow;
