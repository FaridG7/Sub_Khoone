function RentContractDetails({ contract }) {
  const {
    ID,
    mortgage,
    rent,
    startDate,
    expireDate,
    commisionFee,
    firstName,
    lastname,
    title,
  } = contract;
  return (
    <div>
      <h3>{`شناسه: ${ID}`}</h3>
      <p>{`مقدار رهن: ${mortgage}`}</p>
      <p>{`مقدار اجاره: ${rent}`}</p>
      <p>{`تاریخ شروع قرارداد: ${startDate}`}</p>
      <p>{`تاریخ اتمام قرارداد: ${expireDate}`}</p>
      <p>{`مقدار حق کمیسیون: ${commisionFee}`}</p>
      <p>{`نام مستأجر: ${firstName} ${lastname}`}</p>
      <p>{`شناسه ملک: ${title}`}</p>
    </div>
  );
}

export default RentContractDetails;
