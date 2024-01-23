import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";
import RowButton from "../../ui/RowButton";
import SaleContractDetails from "./SaleContractDetails";
import SaleContractForm from "./SaleContractForm";
import { useDeleteSaleContract } from "./useDeleteSaleContract";

function SaleContractRow({ contract, isLoginned }) {
  const { isDeleting, deleteSaleContract } = useDeleteSaleContract();

  const { id: contractId, ID, saledDate, amount, commissionFee } = contract;

  return (
    <tr className="w-full  bg-white">
      <Modal>
        <Modal.Open opens="estate">
          <td className=" border border-black px-5 font-bold">
            <button>{ID}</button>
          </td>
        </Modal.Open>
        <Modal.Open opens="details">
          <td className=" border border-black px-5 font-bold">
            <button>{amount}</button>
          </td>
        </Modal.Open>
        <Modal.Open opens="details">
          <td className=" border border-black px-5 font-bold">
            <button>{commissionFee}</button>
          </td>
        </Modal.Open>
        <Modal.Open opens="details">
          <td className=" border border-black px-5 font-bold">
            <button>{saledDate}</button>
          </td>
        </Modal.Open>
        { isLoginned && <td className=" border border-black px-7 font-bold">
          <Modal.Open opens="edit">
            <RowButton type="edit" />
          </Modal.Open>
          <Modal.Open opens="delete">
            <RowButton type="delete" />
          </Modal.Open>
          <Modal.Window name="edit">
            <SaleContractForm contractToEdit={contract} />
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
        </td>}
      </Modal>
    </tr>
  );
}

export default SaleContractRow;
