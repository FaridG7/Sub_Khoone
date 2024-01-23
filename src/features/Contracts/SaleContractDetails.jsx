function SaleContractDetails({ contract }) {
  const { ID, saledDate, amount, commissionFee, firstName, lastName, title } =
    contract;
  return (
    <div
      className=" flex flex-col justify-start gap-10 text-right text-xl mr-20 mt-20"
      dir="rtl"
    >
      <h3 className="text-2xl font-bold mr-10">{`شناسه: ${ID}`}</h3>
      <div className="flex flex-row gap-10">
        <p>{`تاریخ فروش: ${saledDate}`}</p>
        <p>{`مقدار قرارداد: ${amount}`}</p>
      </div>
      <div className="flex flex-row gap-10">
        <p>{`مقدار حق کمیسیون: ${commissionFee}`}</p>
        <p>{`نام خریدار: ${firstName} ${lastName}`}</p>
      </div>
      <div className="flex flex-row gap-10">
        <p>{`شناسه ملک فروخته شده: ${title}`}</p>
      </div>
    </div>
  );
}

export default SaleContractDetails;
