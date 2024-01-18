import { useQuery } from "@tanstack/react-query";
import { getEstates } from "../../services/apiEstates";

export function useEstates() {
  const {
    isLoading,
    data: estates,
    error,
  } = useQuery({
    queryKey: ["estates"],
    queryFn: getEstates,
  });

  return { isLoading, error, estates };
}
