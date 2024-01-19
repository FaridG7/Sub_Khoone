import { useQuery } from "@tanstack/react-query";
import { getSaleContracts } from "../../services/apiSaleContracts";

export function useSaleContracts() {
  const {
    isLoading,
    data: saleContracts,
    error,
  } = useQuery({
    queryKey: ["saleContracts"],
    queryFn: getSaleContracts,
  });

  return { isLoading, error, saleContracts };
}
