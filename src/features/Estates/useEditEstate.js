import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { editEstate as editEstateApi } from "../../services/apiEstates";

export function useEditEstate() {
  const queryClient = useQueryClient();

  const { mutate: editEstate, isLoading: isEditing } = useMutation({
    mutationFn: ({ newEstateData, id }) => editEstateApi(newEstateData, id),
    onSuccess: () => {
      toast.success("ملک با موفقیت ویرایش شد");
      queryClient.invalidateQueries({ queryKey: ["estates"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editEstate };
}
