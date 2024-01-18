import Button from "../ui/Button";
import PeopleTable from "../features/People/PeopleTable";
import { useState } from "react";
import SearchField from "../ui/searchField";
import Modal from "../ui/Modal";
import CreatePersonForm from "../features/People/PersonForm";

function People() {
  const [isSearchOpen, setIsSerachOpen] = useState(false);
  return (
    <div>
      <PeopleTable />
      <Button
        label={!isSearchOpen ? "جستجو" : "❌"}
        type="green"
        onClick={() => setIsSerachOpen((e) => !e)}
      />
      <Modal>
        <Modal.Open opens="addPerson">
          <Button label="اضافه کردن شخص جدید" type="green" />
        </Modal.Open>
        <Modal.Window name="addPerson">
          <CreatePersonForm />
        </Modal.Window>
      </Modal>
      {isSearchOpen && <SearchField />}
    </div>
  );
}

export default People;
