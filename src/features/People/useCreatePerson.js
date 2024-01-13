import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditPerson } from "../../services/apiPeople";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createPerson, isLoading: isCreating } = useMutation({
    mutationFn: createEditPerson,
    onSuccess: () => {
      toast.success("شخص جدید با موفقیت ایجاد شد");
      queryClient.invalidateQueries({ queryKey: ["people"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createPerson };
}
