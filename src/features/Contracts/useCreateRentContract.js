import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createRentContracts as createRentContractApi } from "../../services/apiRentContracts";

export function useCreateRentContract() {
  const queryClient = useQueryClient();

  const { mutate: createRentContract, isLoading: isCreating } = useMutation({
    mutationFn: createRentContractApi,
    onSuccess: () => {
      toast.success("قرارداد جدید با موفقیت ایجاد شد");
      queryClient.invalidateQueries({ queryKey: ["rentContracts"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createRentContract };
}
