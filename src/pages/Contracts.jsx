import { useState } from "react";
import RentContractsTable from "../features/Contracts/RentContractsTable";
import SaletContractsTable from "../features/Contracts/SaleContractsTable";
import Button from "../ui/Button";
import SearchField from "../ui/searchField";

function Contracts() {
  const [isSearchOpen, setIsSerachOpen] = useState(false);

  return (
    <div>
      <RentContractsTable />
      <SaletContractsTable />
      <Button
        label={!isSearchOpen ? "جستجو" : "❌"}
        type="green"
        onClick={() => setIsSerachOpen((e) => !e)}
      />
      {isSearchOpen && <SearchField />}
    </div>
  );
}

export default Contracts;
