import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteEstate as deleteEstatesApi } from "../../services/apiEstates";

export function useDeleteEstate() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteEstate } = useMutation({
    mutationFn: deleteEstatesApi,
    onSuccess: () => {
      toast.success("ملک با موفقیت حذف شد");

      queryClient.invalidateQueries({
        queryKey: ["estates"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteEstate };
}
