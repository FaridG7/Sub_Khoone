import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { editRentContracts as editRentContractsApi } from "../../services/apiRentContracts";

export function useEditRentContract() {
  const queryClient = useQueryClient();

  const { mutate: editRentContract, isLoading: isEditing } = useMutation({
    mutationFn: ({ newContractData, id }) =>
      editRentContractsApi(newContractData, id),
    onSuccess: () => {
      toast.success("قرارداد با موفقیت ویرایش شد");
      queryClient.invalidateQueries({ queryKey: ["rentContracts"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editRentContract };
}
