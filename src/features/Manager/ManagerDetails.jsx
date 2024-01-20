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
    <div>
      <h3>{`${firstName} ${lastName}`}</h3>
      <h4>{`تعداد املاک فروخته شده توسط شما: ${totalEstatesSold}`}</h4>
      <h4>{`سود شما از قراردادهای فروش: ${salesProfit}`}</h4>
      <h4>{`تعداد املاک اجاره شده توسط شما: ${totalEstatesRented}`}</h4>
      <h4>{`سود شما از قراردادهای اجاره‌ای: ${rentsProfit}`}</h4>
    </div>
  );
}

export default ManagerDetails;
