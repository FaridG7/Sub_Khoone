import Spinner from "../../ui/Spinner";
import useManger from "./useManger";

function ManagerDetails() {
  const {
    isLoading,
    totalEstatesSold,
    totalEstatesRented,
    salesProfit,
    rentsProfit,
    firstName,
    lastName,
  } = useManger();

  if (isLoading) return <Spinner />;


  return (
    <div
      className="text-white flex flex-col justify-start gap-10 text-right text-xl mr-20 mt-20"
      dir="rtl"
    >
      <h3 className="text-2xl font-bold mr-10">{`${firstName} ${lastName} `}</h3>
      <div className="flex flex-row gap-10">
        <h4>{`تعداد املاک فروخته شده توسط شما: ${totalEstatesSold}`}</h4>
        <h4>{`سود شما از قراردادهای فروش: ${salesProfit}`}</h4>
      </div>
      <div className="flex flex-row gap-10">
        <h4>{`تعداد املاک اجاره شده توسط شما: ${totalEstatesRented}`}</h4>
        <h4>{`سود شما از قراردادهای اجاره‌ای: ${rentsProfit}`}</h4>
      </div>
    </div>
  );
}

export default ManagerDetails;
