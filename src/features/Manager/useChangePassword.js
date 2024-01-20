import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useChangePassword() {
  const { mutate: changePassword, isLoading: isChanging } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success("رمز عبور با موفقیت تغییر کرد");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isChanging, changePassword };
}
