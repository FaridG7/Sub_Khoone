import { useState } from "react";
import RentContractForm from "./RentContractForm";
import SaleContractForm from "./SaleContractForm";
import Button from "../../ui/Button";

function ContractForm({ onCloseModal, estate }) {
  const [contractType, setContractType] = useState("rent");

  return (
    <>
      <h3>نوع قرارداد خود را انتخاب کنید</h3>
      <Button
        onClick={() => setContractType("rent")}
        label="رهن و اجاره‌ای"
        color="white"
      />
      <Button
        onClick={() => setContractType("sale")}
        label="فروشی"
        color="white"
      />
      {contractType === "rent" && (
        <RentContractForm onCloseModal={onCloseModal} estate={estate} />
      )}
      {contractType === "sale" && (
        <SaleContractForm onCloseModal={onCloseModal} estate={estate} />
      )}
    </>
  );
}

export default ContractForm;
