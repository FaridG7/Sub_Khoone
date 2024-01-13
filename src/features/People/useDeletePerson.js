import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deletePerson as deletePersonApi} from "../../services/apiPeople";

export function useDeletePerson() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deletePerson } = useMutation({
    mutationFn: deletePersonApi,
    onSuccess: () => {
      toast.success("شخص با موفقیت حذف شد");

      queryClient.invalidateQueries({
        queryKey: ["people"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deletePerson };
}
