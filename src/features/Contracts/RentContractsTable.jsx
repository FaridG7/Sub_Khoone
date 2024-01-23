import { useSearchParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import SortBy from "../../ui/SortBy";
import { useRentContracts } from "./useRentContracts";
import RentContractRow from "./RentContractRow";

function RentContractsTable({ isLoginned }) {
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
      <div className=" max-h-fit overflow-y-scroll max-w-80% ml-auto">
        <table
          dir="rtl"
          className=" table-fixed border-separate border border-slate-500 w-full m-auto] "
        >
          <thead className="bg-[#76453b]">
            <tr>
              <th className="p-4 text-white w-full">شناسه</th>
              <th className="p-4 text-white w-full">رهن</th>
              <th className="p-4 text-white w-full">اجاره</th>
              <th className="p-4 text-white w-full">تاریخ شروع</th>
              <th className="p-4 text-white w-full">تاریخ اتمام</th>
              <th className="p-4 text-white w-full">مقدار حق کمیسیون</th>
              {isLoginned && <th className="p-5 text-white w-full"></th>}
            </tr>
          </thead>
          <tbody>
            {srotedContracts.map((contract) => (
              <RentContractRow contract={contract} key={contract.id} isLoginned={isLoginned} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default RentContractsTable;
