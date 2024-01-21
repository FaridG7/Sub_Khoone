import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteSaleContracts as deleteSaleContractApi } from "../../services/apiSaleContracts";

export function useDeleteSaleContract() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteSaleContract } = useMutation({
    mutationFn: deleteSaleContractApi,
    onSuccess: () => {
      toast.success("قرارداد با موفقیت حذف شد");

      queryClient.invalidateQueries({
        queryKey: ["saleContracts"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteSaleContract };
}
