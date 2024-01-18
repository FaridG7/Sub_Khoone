import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEstate as createEstateApi } from "../../services/apiEstates";

export function useCreateEstate() {
  const queryClient = useQueryClient();

  const { mutate: createEstate, isLoading: isCreating } = useMutation({
    mutationFn: createEstateApi,
    onSuccess: () => {
      toast.success("ملک جدید با موفقیت ایجاد شد");
      queryClient.invalidateQueries({ queryKey: ["estate"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createEstate };
}
