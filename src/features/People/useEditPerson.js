import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditPerson } from "../../services/apiPeople";
import { toast } from "react-hot-toast";

export function useEditPerson() {
  const queryClient = useQueryClient();

  const { mutate: editPerson, isLoading: isEditing } = useMutation({
    mutationFn: ({ newPersonData, id }) => createEditPerson(newPersonData, id),
    onSuccess: () => {
      toast.success("شخص با موفقیت ویرایش شد");
      queryClient.invalidateQueries({ queryKey: ["people"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editPerson };
}
