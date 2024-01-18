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
    <div>
      <h3>{`شناسه: ${title} (${adType})`}</h3>
      <p>{`تاریخ ثبت: ${createdAt}`}</p>
      <p>{`آدرس: ${address}`}</p>
      <p>{`نوع ملک: ${type}`}</p>
      <p>{`سال ساخت: ${constructionYear}`}</p>
      <p>{`متراژ: ${area}`}</p>
      <p>{`تعداد اتاق‌ها: ${roomsCount}`}</p>
      <p>{`توضیحات: ${description}`}</p>
    </div>
  );
}

export default EstateDetails;
