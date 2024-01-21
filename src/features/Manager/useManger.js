import { useQuery } from "@tanstack/react-query";
import { getManger } from "../../services/apimanager";
import { getSaleContracts } from "../../services/apiSaleContracts";
import { getRentContracts } from "../../services/apiRentContracts";

function useManger() {
  const {
    isLoading: salesLoading,
    data: saleContracts,
    error: slaesError,
  } = useQuery({
    queryKey: ["saleContracts"],
    queryFn: getSaleContracts,
  });
  const {
    isLoading: rentsLoading,
    data: rentContracts,
    error: rentError,
  } = useQuery({
    queryKey: ["rentContracts"],
    queryFn: getRentContracts,
  });
  const {
    isLoading: managerLoading,
    data: managerData,
    error: managerError,
  } = useQuery({
    queryKey: ["manager"],
    queryFn: getManger,
  });

  const isLoading = salesLoading || rentsLoading || managerLoading;

  const totalEstatesSold = saleContracts?.length;
  const totalEstatesRented = rentContracts?.length;
  const salesProfit = saleContracts?.reduce(
    (prev, cur) => prev + cur.commisionFee,
    0
  );
  const rentsProfit = rentContracts?.reduce(
    (prev, cur) => prev + cur.commisionFee,
    0
  );

  return {
    isLoading,
    totalEstatesSold,
    totalEstatesRented,
    salesProfit,
    rentsProfit,
    firstName: managerData?.firstName,
    lastName: managerData?.lastName,
  };
}

export default useManger;
