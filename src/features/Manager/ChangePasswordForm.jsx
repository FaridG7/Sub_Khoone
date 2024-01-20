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
      <FormRow label="رمزعبور جدید" error={errors?.name?.message}>
        <input
          className=""
          type="text"
          id="password"
          disabled={isChanging}
          {...register("password", {
            required: "این فیلد باید پر شود",
          })}
        />
      </FormRow>
      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          color="white"
          type="reset"
          label="لغو"
          onClick={() => onCloseModal?.()}
        />
        <Button color="green" disabled={isChanging} label="تغییز رمز عبور" />
      </FormRow>
    </form>
  );
}

export default ChangePasswordForm;
