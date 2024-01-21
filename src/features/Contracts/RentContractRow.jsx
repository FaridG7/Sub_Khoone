import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";
import RowButton from "../../ui/RowButton";
import RentContractDetails from "./RentContractDetails";
import { useDeleteRentContract } from "./useDeleteRentContract";

function RentContractRow({ contract }) {
  const { isDeleting, deleteRentContract } = useDeleteRentContract();

  const {
    id: contractId,
    ID,
    mortgage,
    rent,
    startDate,
    expireDate,
    commisionFee,
  } = contract;

  return (
    <tr className="w-full bg-white">
      <Modal>
        <Modal.Open opens="estate">
          <td className=" border border-black px-5 font-bold">
            <button>{ID}</button>
          </td>
        </Modal.Open>
        <Modal.Open opens="details">
          <td className=" border border-black px-5 font-bold">
            <button>{mortgage}</button>
          </td>
        </Modal.Open>
        <Modal.Open opens="details">
          <td className=" border border-black px-5 font-bold">
            <button>{rent}</button>
          </td>
        </Modal.Open>
        <Modal.Open opens="details">
          <td className=" border border-black px-5 font-bold">
            <button>{startDate}</button>
          </td>
        </Modal.Open>
        <Modal.Open opens="details">
          <td className=" border border-black px-5 font-bold">
            <button>{expireDate}</button>
          </td>
        </Modal.Open>
        <Modal.Open opens="details">
          <td className=" border border-black px-5 font-bold">
            <button>{commisionFee}</button>
          </td>
        </Modal.Open>
        <td className=" border border-black px-5 font-bold">
          <Modal.Open opens="edit">
            <RowButton type="edit" />
          </Modal.Open>
          <Modal.Open opens="delete">
            <RowButton type="delete" />
          </Modal.Open>
          <Modal.Window name="edit">
            <rentContractForm contractToEdit={contract} />
          </Modal.Window>
          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName={`قرارداد ${ID}`}
              disabled={isDeleting}
              onConfirm={() => deleteRentContract(contractId)}
            />
          </Modal.Window>
          <Modal.Window name="details">
            <RentContractDetails contract={contract} />
          </Modal.Window>
        </td>
      </Modal>
    </tr>
  );
}

export default RentContractRow;
