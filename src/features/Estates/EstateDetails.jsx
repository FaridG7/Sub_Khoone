function EstateDetails({ estate }) {
  const {
    title,
    address,
    constructionYear,
    roomsCount,
    area,
    type,
    adType,
    createdAt,
    description,
  } = estate;
  return (
    <div className=" flex flex-col justify-start gap-10 text-right text-xl mr-20 mt-20" dir="rtl">
      <h3 className="text-2xl font-bold mr-10">{`شناسه: ${title} (${adType})`}</h3>
      <div className="flex flex-row gap-10">
        <p>{`تاریخ ثبت: ${createdAt}`}</p>
        <p>{`آدرس: ${address}`}</p>
      </div>
      <div className="flex flex-row gap-10">
        <p>{`نوع ملک: ${type}`}</p>
        <p>{`سال ساخت: ${constructionYear}`}</p>
      </div>
      <div className="flex flex-row gap-10">
        <p>{`متراژ: ${area}`}</p>
        <p>{`تعداد اتاق‌ها: ${roomsCount}`}</p>
      </div>
      <div className="flex flex-row gap-10">
        <p>{`توضیحات: ${description}`}</p>
      </div>
    </div>
  );
}

export default EstateDetails;
