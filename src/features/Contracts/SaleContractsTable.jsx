import { useSearchParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import SortBy from "../../ui/SortBy";
import { useSaleContracts } from "./useSaleContracts";
import SaleContractRow from "./SaleContractRow";

function SaletContractsTable() {
  const { isLoading, saleContracts } = useSaleContracts();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  let searchedContracts = saleContracts;
  const searchValue = searchParams.get("serachValue") || "";
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
          { value: "amount-asc", label: " به ترتیب مقدار مبلغ قرارداد" },
          { value: "amount-desc", label: "به ترتیب مقدار مبلغ قرارداد (برعکس)" },
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
      <table dir="rtl">
        <thead>
          <tr>
            <th>شناسه</th>
            <th>مبلغ قرارداد</th>
            <th>مقدار حق کمیسیون</th>
            <th>تاریخ فروش</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {srotedContracts.map((contract) => (
            <SaleContractRow contract={contract} key={contract.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default SaletContractsTable;
