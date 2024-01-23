function RentContractDetails({ contract }) {
  const {
    ID,
    mortgage,
    rent,
    startDate,
    expireDate,
    commissionFee,
    firstName,
    lastname,
    title,
  } = contract;
  return (
    <div
      className=" flex flex-col justify-start gap-10 text-right text-xl mr-20 mt-20"
      dir="rtl"
    >
      <h3 className="text-2xl font-bold mr-10">{`شناسه: ${ID}`}</h3>
      <div className="flex flex-row gap-10">
        <p>{`مقدار رهن: ${mortgage}`}</p>
        <p>{`مقدار اجاره: ${rent}`}</p>
      </div>
      <div className="flex flex-row gap-10">
        <p>{`تاریخ شروع قرارداد: ${startDate}`}</p>
        <p>{`تاریخ اتمام قرارداد: ${expireDate}`}</p>
      </div>
      <div className="flex flex-row gap-10">
        <p>{`مقدار حق کمیسیون: ${commissionFee}`}</p>
        <p>{`نام مستأجر: ${firstName} ${lastname}`}</p>
      </div>
      <div className="flex flex-row gap-10">
        <p>{`شناسه ملک: ${title}`}</p>
      </div>
    </div>
  );
}

export default RentContractDetails;
