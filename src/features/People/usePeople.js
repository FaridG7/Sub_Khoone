import { useQuery } from "@tanstack/react-query";
import { getPeople } from "../../services/apiPeople.js";

export function usePeople() {
  const {
    isLoading,
    data: people,
    error,
  } = useQuery({
    queryKey: ["people"],
    queryFn: getPeople,
  });

  return { isLoading, error, people };
}
