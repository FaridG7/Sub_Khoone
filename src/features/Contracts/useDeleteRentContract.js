import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteRentContract as deleteRentContractApi } from "../../services/apiRentContracts";

export function useDeleteRentContract() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteRentContract } = useMutation({
    mutationFn: deleteRentContractApi,
    onSuccess: () => {
      toast.success("قرارداد با موفقیت حذف شد");

      queryClient.invalidateQueries({
        queryKey: ["rentContracts"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteRentContract };
}
