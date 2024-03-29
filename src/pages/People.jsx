import Button from "../ui/Button";
import PeopleTable from "../features/People/PeopleTable";
import { useState } from "react";
import SearchField from "../ui/searchField";
import Modal from "../ui/Modal";
import CreatePersonForm from "../features/People/PersonForm";
import useIsLoginned from "../hooks/useIsLoginned";
import Spinner from "../ui/Spinner";

function People() {
  const [isSearchOpen, setIsSerachOpen] = useState(false);
  const { isLoading, isLoginned } = useIsLoginned();
  if (isLoading) return <Spinner />;

  return (
    <>
      <div className="flex flex-col items-between gap-6">
        <h2 className=" text-3xl font-bold mx-auto flex mt-5">لیست اشخاص</h2>
        <PeopleTable isLoginned={isLoginned} />
      </div>
      <Button
        label={!isSearchOpen ? "جستجو" : "❌"}
        color="green"
        onClick={() => setIsSerachOpen((e) => !e)}
      />
      {isLoginned && (
        <Modal>
          <Modal.Open opens="addPerson">
            <Button label="اضافه کردن شخص جدید" color="green" />
          </Modal.Open>
          <Modal.Window name="addPerson">
            <CreatePersonForm />
          </Modal.Window>
        </Modal>
      )}
      {isSearchOpen && <SearchField />}
    </>
  );
}

export default People;
