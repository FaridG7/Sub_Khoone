import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createSaleContracts as createSaleContractsApi } from "../../services/apiSaleContracts";

export function useCreateSaleContract() {
  const queryClient = useQueryClient();

  const { mutate: createSaleContract, isLoading: isCreating } = useMutation({
    mutationFn: createSaleContractsApi,
    onSuccess: () => {
      toast.success("قرارداد جدید با موفقیت ایجاد شد");
      queryClient.invalidateQueries({ queryKey: ["saleContracts"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createSaleContract };
}
