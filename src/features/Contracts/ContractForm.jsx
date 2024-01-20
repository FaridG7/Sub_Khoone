import { useState } from "react";

function ContractForm({ onCloseModal }) {
  const [contractType, setContractType] = useState("");

  return (
    <>
      <h3>نوع قرارداد خود را انتخاب کنید</h3>
      <button onClick={() => setContractType("rent")}>رهن و اجاره‌ای</button>
      <button onClick={() => setContractType("sale")}>فروشی</button>
      {/* {contractType === "rent" && <RentContractForm />}
      {contractType === "sale" && <SaleContractForm />} */}
    </>
  );
}

export default ContractForm;
