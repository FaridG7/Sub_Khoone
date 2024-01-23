import { useForm } from "react-hook-form";

import Button from "../../ui/Button";

import FormRow from "../../ui/FormRow";
import { usePeople } from "../People/usePeople";
import Spinner from "../../ui/Spinner";
import { useCreateSaleContract } from "./useCreateSaleContract";
import { useEditSaleContract } from "./useEditSaleContract";

function SaleContractForm({ contractToEdit = {}, onCloseModal, estate }) {
  const { isLoading, people } = usePeople();
  const { isCreating, createSaleContract } = useCreateSaleContract();
  const { isEditing, editSaleContract } = useEditSaleContract();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = contractToEdit;
  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession
      ? { ...editValues, managerID: 1 }
      : { saledEstate: estate?.id, managerID: 1 },
  });
  const { errors } = formState;
  function onSubmit(data) {
    delete data.firstName;
    delete data.lastName;
    delete data.title;
    if (isEditSession)
      editSaleContract(
        { newContractData: { ...data }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createSaleContract(
        { ...data },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }

  function onError(errorsm) {
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
      <FormRow label="تاریخ فروش" error={errors?.name?.message}>
        <input
          type="date"
          id="saledDate"
          disabled={isWorking}
          {...register("saledDate", {
            required: "این فیلد باید پر شود",
          })}
        />
      </FormRow>
      <FormRow label="مقدار قرارداد" error={errors?.name?.message}>
        <input
          type="number"
          id="amount"
          disabled={isWorking}
          {...register("amount", {
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
        id="saledEstate"
        disabled={true}
        {...register("saledEstate", {
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
          id="buyerId"
          {...register("buyerId", {
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

export default SaleContractForm;
