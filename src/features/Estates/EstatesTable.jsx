import { useSearchParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import EstateRow from "./EstateRow";
import SortBy from "../../ui/SortBy";
import { useEstates } from "./useEstates";

function EstatesTable() {
  const { isLoading, estates } = useEstates();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  const filterValue = searchParams.get("filterValue") || "all";
  let filteredEstates = estates;
  if (filterValue === "all")
    if (filterValue === "sale")
      filteredEstates = estates.filter((estate) => estate.type === "فروشی");
  if (filterValue === "rent")
    filteredEstates = estates.filter(
      (estate) => estate.type === "رهن و اجاره‌ای"
    );

  let searcheddEstates = filteredEstates;
  const searchValue = searchParams.get("serachValue") || "";
  if (searchValue !== "")
    searcheddEstates = estates.filter(
      (people) =>
        people.firstName.includes(searchValue) ||
        people.lastName.includes(searchValue) ||
        people.phoneNumber.includes(searchValue) ||
        people.meliCode.includes(searchValue)
    );

  const sortBy = searchParams.get("sortBy") || "createdAt-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const srotedEstates = searcheddEstates.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  if (!estates.length)
    return <span dir="rtl">هیچ داده‌ای برای نمایش وجود ندارد</span>;

  return (
    <>
      <SortBy
        options={[
          { value: "title-asc", label: "به ترتیب شناسه" },
          { value: "title-desc", label: "به ترتیب شناسه (برعکس)" },
          { value: "area-asc", label: " به ترتیب متراژ" },
          { value: "area-desc", label: "به ترتیب متراژ (برعکس)" },
          { value: "type-asc", label: " به ترتیب نوع ملک" },
          { value: "type-desc", label: "به ترتیب نوع ملک (برعکس)" },
          { value: "adType-asc", label: " به ترتیب نوع آگهی" },
          { value: "adType-desc", label: "به ترتیب نوع آگهی (برعکس)" },
          { value: "createdAt-asc", label: " به ترتیب زمان ایجاد" },
          { value: "createdAt-desc", label: "به ترتیب زمان ایجاد (برعکس)" },
        ]}
      />
      <table dir="rtl">
        <thead>
          <tr>
            <th>شناسه</th>
            <th>متراژ</th>
            <th>نوع ملک</th>
            <th>نوع آگهی</th>
            <th>تاریخ ثبت</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {srotedEstates.map((estate) => (
            <EstateRow estate={estate} key={estate.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default EstatesTable;
