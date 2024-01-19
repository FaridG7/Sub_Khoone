import { useState } from "react";
import EstatesTable from "../features/Estates/EstatesTable";
import Button from "../ui/Button";
import SearchField from "../ui/searchField";

function Estates() {
  const [isSearchOpen, setIsSerachOpen] = useState(false);

  return (
    <div>
      <EstatesTable />
      <Button
        label={!isSearchOpen ? "جستجو" : "❌"}
        type="green"
        onClick={() => setIsSerachOpen((e) => !e)}
      />
      {isSearchOpen && <SearchField />}
    </div>
  );
}

export default Estates;
