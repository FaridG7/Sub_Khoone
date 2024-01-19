function SaleContractDetails({ contract }) {
  const { ID, saledDate, amount, commisionFee, firstName, lastName, title } =
    contract;
  return (
    <div>
      <h3>{`شناسه: ${ID}`}</h3>
      <p>{`تاریخ فروش: ${saledDate}`}</p>
      <p>{`مقدار قرارداد: ${amount}`}</p>
      <p>{`مقدار حق کمیسیون: ${commisionFee}`}</p>
      <p>{`نام خریدار: ${firstName} ${lastName}`}</p>
      <p>{`شناسه ملک فروخته شده: ${title}`}</p>
    </div>
  );
}

export default SaleContractDetails;
