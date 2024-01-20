import { useForm } from "react-hook-form";
import { useChangePassword } from "./useChangePassword";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";

function ChangePasswordForm({ onCloseModal }) {
  const { isChanging, changePassword } = useChangePassword();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    changePassword(
      { ...data },
      {
        onSuccess: (data) => {
          reset();
          onCloseModal?.();
        },
      }
    );
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="نام" error={errors?.name?.message}>
        <input
          className=""
          type="text"
          id="firstName"
          disabled={isChanging}
          {...register("firstName", {
            required: "این فیلد باید پر شود",
          })}
        />
      </FormRow>
      <FormRow>
        {/* type is an HTML attribute! */}
        <Button color="white" type="reset" onClick={() => onCloseModal?.()}>
          لغو
        </Button>
        <Button color="green" disabled={isChanging}>
          تغییز رمز عبور
        </Button>
      </FormRow>
    </form>
  );
}

export default ChangePasswordForm;
