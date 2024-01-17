import Button from "../ui/Button";
import PeopleTable from "../features/People/PeopleTable";

function People() {
  return (
    <div>
      <PeopleTable />
      <Button label="جستجو" color="green" />
      <Button label="اضافه کردن شخص جدید" color="green" />
    </div>
  );
}

export default People;
