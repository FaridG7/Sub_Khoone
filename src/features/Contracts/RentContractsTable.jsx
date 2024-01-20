import { useSearchParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import SortBy from "../../ui/SortBy";
import { useRentContracts } from "./useRentContracts";
import RentContractRow from "./RentContractRow";

function RentContractsTable() {
  const { isLoading, rentContracts } = useRentContracts();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  let searchedContracts = rentContracts;
  const searchValue = searchParams.get("searchQuery") || "";
  if (searchValue !== "")
    searchedContracts = rentContracts.filter(
      (people) =>
        people.firstName.includes(searchValue) ||
        people.lastName.includes(searchValue) ||
        people.phoneNumber.includes(searchValue) ||
        people.meliCode.includes(searchValue)
    );

  const sortBy = searchParams.get("sortBy") || "createdAt-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const srotedContracts = searchedContracts.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  if (!srotedContracts.length)
    return <span dir="rtl">هیچ داده‌ای برای نمایش وجود ندارد</span>;

  return (
    <>
      <SortBy
        options={[
          { value: "ID-asc", label: "به ترتیب شناسه" },
          { value: "ID-desc", label: "به ترتیب شناسه (برعکس)" },
          { value: "mortgage-asc", label: " به ترتیب مقدار رهن" },
          { value: "mortgage-desc", label: "به ترتیب مقدار رهن (برعکس)" },
          { value: "rent-asc", label: " به ترتیب مقدار اجاره" },
          { value: "rent-desc", label: "به ترتیب مقدار اجاره (برعکس)" },
          { value: "startDate-asc", label: " به ترتیب تاریخ شروع قرارداد" },
          {
            value: "startDate-desc",
            label: "به ترتیب تاریخ شروع قرارداد (برعکس)",
          },
          { value: "expireDate-asc", label: " به ترتیب تاریخ اتمام قرارداد" },
          {
            value: "expireDate-desc",
            label: "به ترتیب تاریخ اتمام قرارداد (برعکس)",
          },
          { value: "commisionFee-asc", label: " به ترتیب مقدار حق کمیسیون" },
          {
            value: "commisionFee-desc",
            label: "به ترتیب مقدار حق کمیسیون (برعکس)",
          },
        ]}
      />
      <table dir="rtl">
        <thead>
          <tr>
            <th>شناسه</th>
            <th>رهن</th>
            <th>اجاره</th>
            <th>تاریخ شروع</th>
            <th>تاریخ اتمام</th>
            <th>مقدار حق کمیسیون</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {srotedContracts.map((contract) => (
            <RentContractRow contract={contract} key={contract.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default RentContractsTable;
