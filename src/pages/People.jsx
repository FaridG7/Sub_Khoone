import Button from "../ui/Button";
import PeopleTable from "../ui/PeopleTable";

function People() {
  return (
    <div>
      <PeopleTable />
      <Button label="جستجو" type="green" />
      <Button label="اضافه کردن شخص جدید" type="green" />
    </div>
  );
}

export default People;
