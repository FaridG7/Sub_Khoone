import { useState } from "react";
import RentContractsTable from "../features/Contracts/RentContractsTable";
import SaletContractsTable from "../features/Contracts/SaleContractsTable";
import Button from "../ui/Button";
import SearchField from "../ui/searchField";
import useIsLoginned from "../hooks/useIsLoginned";
import Spinner from "../ui/Spinner";

function Contracts() {
  const [isSearchOpen, setIsSerachOpen] = useState(false);
  const { isLoading, isLoginned } = useIsLoginned();
  if (isLoading) return <Spinner />;
  return (
    <div className="flex flex-col items-between gap-6">
      <h2 className=" text-3xl font-bold mx-auto flex mt-5">لیست قراردادها</h2>
      <RentContractsTable isLoginned={isLoginned} />
      <SaletContractsTable isLoginned={isLoginned} />
      <Button
        label={!isSearchOpen ? "جستجو" : "❌"}
        color="green"
        onClick={() => setIsSerachOpen((e) => !e)}
      />
      {isSearchOpen && <SearchField />}
    </div>
  );
}

export default Contracts;
