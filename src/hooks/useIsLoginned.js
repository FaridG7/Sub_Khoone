import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services/apiAuth";

function useIsLoginned() {
  const {
    isLoading: isLoginnedLoading,
    data,
    error: isLogginnedError,
  } = useQuery({
    queryKey: ["isLoggined"],
    queryFn: getCurrentUser,
  });
  const isLoginned = data != null;
  return { isLoginnedLoading, isLoginned };
}

export default useIsLoginned;
