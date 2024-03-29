import { useForm } from "react-hook-form";

import Button from "../../ui/Button";

import { useCreatePerson } from "./useCreatePerson";
import { useEditPerson } from "./useEditPerson";
import FormRow from "../../ui/FormRow";

function CreatePersonForm({ personToEdit = {}, onCloseModal }) {
  const { isCreating, createPerson } = useCreatePerson();
  const { isEditing, editPerson } = useEditPerson();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = personToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    if (isEditSession)
      editPerson(
        { newPersonData: { ...data }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createPerson(
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
    // console.log(errors);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="نام" error={errors?.name?.message}>
        <input  className="border-2 border-[#005445] w-fit justify-self-end bg-[#e3d3e0] rounded-full ps-4"
          
          type="text"
          id="firstName"
          disabled={isWorking}
          {...register("firstName", {
            required: "این فیلد باید پر شود",
          })}
        />
      </FormRow>
      <FormRow label="نام خانوادگی" error={errors?.name?.message}>
        <input className="border-2 border-[#005445] w-fit justify-self-end bg-[#e3d3e0] rounded-full ps-4"
          type="text"
          id="lastName"
          disabled={isWorking}
          {...register("lastName", {
            required: "این فیلد باید پر شود",
          })}
        />
      </FormRow>
      <FormRow label="کد ملی" error={errors?.name?.message}>
        <input className="border-2 border-[#005445] w-fit justify-self-end bg-[#e3d3e0] rounded-full ps-4"
          type="text"
          id="meliCode"
          disabled={isWorking}
          {...register("meliCode", {
            required: "این فیلد باید پر شود",
          })}
        />
      </FormRow>

      <FormRow label="شماره تماس" error={errors?.name?.message}>
        <input className="border-2 border-[#005445] w-fit justify-self-end bg-[#e3d3e0] rounded-full ps-4"
          type="text"
          id="phoneNumber"
          disabled={isWorking}
          {...register("phoneNumber", {
            required: "این فیلد باید پر شود",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          color="white"
          type="reset"
          onClick={() => onCloseModal?.()}
          label="لغو"
        />
        <Button
          color="green"
          disabled={isWorking}
          label={isEditSession ? "ویرایش شخص" : "ثبت شخص جدید"}
        />
      </FormRow>
    </form>
  );
}

export default CreatePersonForm;
