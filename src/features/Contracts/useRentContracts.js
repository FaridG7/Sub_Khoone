import { useQuery } from "@tanstack/react-query";
import { getRentContracts } from "../../services/apiRentContracts";

export function useRentContracts() {
  const {
    isLoading,
    data: rentContracts,
    error,
  } = useQuery({
    queryKey: ["rentContracts"],
    queryFn: getRentContracts,
  });

  return { isLoading, error, rentContracts };
}
