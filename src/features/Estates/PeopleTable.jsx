import { useSearchParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import TableRow from "./PersonRow";
import { usePeople } from "./usePeople";
import SortBy from "../../ui/SortBy";

function PeopleTable() {
  const { isLoading, people } = usePeople();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  const searchValue = searchParams.get("serachValue") || "";
  let filteredPeople = people;
  if (searchValue !== "")
    filteredPeople = people.filter(
      (people) =>
        people.firstName.includes(searchValue) ||
        people.lastName.includes(searchValue) ||
        people.phoneNumber.includes(searchValue) ||
        people.meliCode.includes(searchValue)
    );

  const sortBy = searchParams.get("sortBy") || "createdAt-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const srotedPeople = filteredPeople.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  if (!people.length)
    return <span dir="rtl">هیچ داده‌ای برای نمایش وجود ندارد</span>;

  return (
    <>
      <SortBy
        options={[
          { value: "firstName-asc", label: "به ترتیب نام" },
          { value: "firstName-desc", label: "به ترتیب نام (برعکس)" },
          { value: "lastName-asc", label: " به ترتیب نام خانوادگی" },
          { value: "lastName-desc", label: "به ترتیب نام خانوادگی (برعکس)" },
          { value: "meliCode-asc", label: " به ترتیب کد ملی" },
          { value: "meliCode-desc", label: "به ترتیب کد ملی (برعکس)" },
          { value: "phoneNumber-asc", label: " به ترتیب شماره تماس" },
          { value: "phoneNumber-desc", label: "به ترتیب شماره تماس (برعکس)" },
          { value: "createdAt-asc", label: " به ترتیب زمان ایجاد" },
          { value: "createdAt-desc", label: "به ترتیب زمان ایجاد (برعکس)" },
        ]}
      />
      <table dir="rtl">
        <tr>
          <th>نام</th>
          <th>نام خانوادگی</th>
          <th>کد ملی</th>
          <th>شماره تماس</th>
          <th>تاریخ ایجاد</th>
          <th></th>
        </tr>
        {srotedPeople.map((person) => (
          <TableRow person={person} />
        ))}
      </table>
    </>
  );
}

export default PeopleTable;
