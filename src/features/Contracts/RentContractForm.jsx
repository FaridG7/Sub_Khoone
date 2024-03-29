import { useForm } from "react-hook-form";

import Button from "../../ui/Button";

import FormRow from "../../ui/FormRow";
import { useCreateRentContract } from "./useCreateRentContract";
import { useEditRentContract } from "./useEditRentContract";
import { usePeople } from "../People/usePeople";
import Spinner from "../../ui/Spinner";

function RentContractForm({ contractToEdit = {}, onCloseModal, estate }) {
  const { isLoading, people } = usePeople();
  const { isCreating, createRentContract } = useCreateRentContract();
  const { isEditing, editRentContract } = useEditRentContract();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = contractToEdit;
  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession
      ? { ...editValues, managerID: 1 }
      : { estateID: estate?.id, managerID: 1 },
  });
  const { errors } = formState;

  function onSubmit(data) {
    delete data.firstName;
    delete data.lastName;
    delete data.title;
    if (isEditSession)
      editRentContract(
        {
          newContractData: {
            ...data,
          },
          id: editId,
        },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createRentContract(
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

  if (isLoading) return <Spinner />;

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="شناسه" error={errors?.name?.message}>
        <input
          type="text"
          id="ID"
          disabled={isWorking}
          {...register("ID", {
            required: "این فیلد باید پر شود",
          })}
        />
      </FormRow>
      <FormRow label="مقدار رهن" error={errors?.name?.message}>
        <input
          type="number"
          id="mortgage"
          disabled={isWorking}
          {...register("mortgage", {
            required: "این فیلد باید پر شود",
          })}
        />
      </FormRow>
      <FormRow label="مقدار اجاره" error={errors?.name?.message}>
        <input
          type="number"
          id="rent"
          disabled={isWorking}
          {...register("rent", {
            required: "این فیلد باید پر شود",
          })}
        />
      </FormRow>
      <FormRow label="تاریخ شروع" error={errors?.name?.message}>
        <input
          type="date"
          id="startDate"
          disabled={isWorking}
          {...register("startDate", {
            required: "این فیلد باید پر شود",
          })}
        />
      </FormRow>
      <FormRow label="تاریخ اتمام" error={errors?.name?.message}>
        <input
          type="date"
          id="expireDate"
          disabled={isWorking}
          {...register("expireDate", {
            required: "این فیلد باید پر شود",
          })}
        />
      </FormRow>
      <FormRow label="مقدار حق کمیسیون" error={errors?.name?.message}>
        <input
          type="number"
          id="commissionFee"
          disabled={isWorking}
          {...register("commissionFee", {
            required: "این فیلد باید پر شود",
          })}
        />
      </FormRow>

      <input
        type="number"
        id="estateID"
        disabled={true}
        {...register("estateID", {
          required: "این فیلد باید پر شود",
        })}
        className=" hidden"
      />

      <input
        type="number"
        id="managerID"
        disabled={true}
        {...register("managerID", {
          required: "این فیلد باید پر شود",
        })}
        className=" hidden"
      />
      <FormRow>
        <select
          id="renterID"
          {...register("renterID", {
            required: "این فیلد باید پر شود",
          })}
        >
          {people.map((person) => (
            <option
              value={person.id}
              key={person.id}
            >{`${person.firstName} ${person.lastName} (${person.meliCode})`}</option>
          ))}
        </select>
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
          label={isEditSession ? "ویرایش قرارداد" : "ثبت قرارداد جدید"}
        />
      </FormRow>
    </form>
  );
}

export default RentContractForm;
