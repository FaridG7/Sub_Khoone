import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { editSaleContracts as editContractApi } from "../../services/apiSaleContracts";

export function useEditSaleContract() {
  const queryClient = useQueryClient();

  const { mutate: editSaleContract, isLoading: isEditing } = useMutation({
    mutationFn: ({ newContractData, id }) =>
      editContractApi(newContractData, id),
    onSuccess: () => {
      toast.success("قرارداد با موفقیت ویرایش شد");
      queryClient.invalidateQueries({ queryKey: ["saleContracts"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editSaleContract };
}
