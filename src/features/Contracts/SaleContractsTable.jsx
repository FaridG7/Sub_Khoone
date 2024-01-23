import { useSearchParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import SortBy from "../../ui/SortBy";
import { useSaleContracts } from "./useSaleContracts";
import SaleContractRow from "./SaleContractRow";

function SaletContractsTable({ isLoginned }) {
  const { isLoading, saleContracts } = useSaleContracts();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  let searchedContracts = saleContracts;
  const searchValue = searchParams.get("searchQuery") || "";
  if (searchValue !== "")
    searchedContracts = saleContracts.filter(
      (people) =>
        people.firstName.includes(searchValue) ||
        people.lastName.includes(searchValue) ||
        people.phoneNumber.includes(searchValue) ||
        people.meliCode.includes(searchValue)
    );

  const sortBy = searchParams.get("sortBy") || "createdAt-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedContracts = searchedContracts.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  if (!sortedContracts.length)
    return <span dir="rtl">هیچ داده‌ای برای نمایش وجود ندارد</span>;

  return (
    <>
      <SortBy
        options={[
          { value: "ID-asc", label: "به ترتیب شناسه" },
          { value: "ID-desc", label: "به ترتیب شناسه (برعکس)" },
          { value: "amount-asc", label: " به ترتیب مقدار مبلغ قرارداد" },
          {
            value: "amount-desc",
            label: "به ترتیب مقدار مبلغ قرارداد (برعکس)",
          },
          { value: "saledDate-asc", label: " به ترتیب تاریخ فروش" },
          {
            value: "saledDate-desc",
            label: "به ترتیب تاریخ فروش (برعکس)",
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
              <th className="p-4 text-white w-full">مبلغ قرارداد</th>
              <th className="p-4 text-white w-full">مقدار حق کمیسیون</th>
              <th className="p-4 text-white w-full">تاریخ فروش</th>
              {isLoginned && <th className="p-5 text-white w-full"></th>}
            </tr>
          </thead>
          <tbody>
            {sortedContracts.map((contract) => (
              <SaleContractRow contract={contract} key={contract.id} isLoginned={isLoginned}/>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SaletContractsTable;
