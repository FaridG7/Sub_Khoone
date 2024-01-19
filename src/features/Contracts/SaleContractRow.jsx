import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";
import RowButton from "../../ui/RowButton";
import SaleContractDetails from "./SaleContractDetails";
import { useDeleteSaleContract } from "./useDeleteSaleContract";

function SaleContractRow({ contract }) {
  const { isDeleting, deleteSaleContract } = useDeleteSaleContract();

  const { id: contractId, ID, saledDate, amount, commisionFee } = contract;

  return (
    <tr>
      <Modal>
        <Modal.Open opens="estate">
          <td>
            <button>{ID}</button>
          </td>
        </Modal.Open>
        <Modal.Open opens="details">
          <td>
            <button>{amount}</button>
          </td>
        </Modal.Open>
        <Modal.Open opens="details">
          <td>
            <button>{commisionFee}</button>
          </td>
        </Modal.Open>
        <Modal.Open opens="details">
          <td>
            <button>{saledDate}</button>
          </td>
        </Modal.Open>
        <td>
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
              onConfirm={() => deleteSaleContract(contractId)}
            />
          </Modal.Window>
          <Modal.Window name="details">
            <SaleContractDetails contract={contract} />
          </Modal.Window>
        </td>
      </Modal>
    </tr>
  );
}

export default SaleContractRow;
