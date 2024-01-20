import { useForm } from "react-hook-form";

import Button from "../../ui/Button";

import { useCreateEstate } from "./useCreateEstate";
import { useEditEstate } from "./useEditEstate";
import FormRow from "../../ui/FormRow";

function EstateForm({ estateToEdit = {}, onCloseModal, owner }) {
  const { isCreating, createEstate } = useCreateEstate();
  const { isEditing, editEstate } = useEditEstate();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = estateToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : { ownerId: owner.id },
  });
  const { errors } = formState;

  function onSubmit(data) {
    if (isEditSession)
      editEstate(
        { newEstateData: { ...data }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createEstate(
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
      <FormRow label="شناسه" error={errors?.name?.message}>
        <input
          type="text"
          id="title"
          disabled={isWorking}
          {...register("title", {
            required: "این فیلد باید پر شود",
          })}
        />
      </FormRow>
      <FormRow label="آدرس" error={errors?.name?.message}>
        <input
          type="text"
          id="address"
          disabled={isWorking}
          {...register("address", {
            required: "این فیلد باید پر شود",
          })}
        />
      </FormRow>
      <FormRow label="آدرس" error={errors?.name?.message}>
        <select
          id="type"
          {...register("type", {
            required: "این فیلد باید پر شود",
          })}
        >
          <option value="آپارتمانی">آپارتمانی</option>
          <option value="ویلایی">ویلایی</option>
          <option value="تجاری">تجاری</option>
          <option value="مجتمع">مجتمع</option>
          <option value="زمین">زمین</option>
        </select>
      </FormRow>
      <FormRow label="سال ساخت" error={errors?.name?.message}>
        <input
          type="year"
          id="constructionYear"
          disabled={isWorking}
          {...register("constructionYear", {
            required: "این فیلد باید پر شود",
          })}
        />
      </FormRow>

      <FormRow label="متراژ" error={errors?.name?.message}>
        <input
          type="number"
          id="area"
          disabled={isWorking}
          {...register("area", {
            required: "این فیلد باید پر شود",
          })}
        />
      </FormRow>

      <FormRow label="توضیحات" error={errors?.description?.message}>
        <textarea
          type="text"
          id="description"
          defaultValue=""
          disabled={isWorking}
          {...register("description", {
            required: "این فیلد باید پر شود",
          })}
        />
      </FormRow>
      <FormRow label="نوع آگهی" error={errors?.name?.message}>
        <select
          name=""
          id="adType"
          {...register("adType", {
            required: "این فیلد باید پر شود",
          })}
        >
          <option value="فروشی">فروش</option>
          <option value="رهن و اجاره‌ای">رهن و اجاره‌ای</option>
        </select>
      </FormRow>

      <input
        type="number"
        id="ownerId"
        disabled={true}
        {...register("ownerId", {
          required: "این فیلد باید پر شود",
        })}
        className=" hidden"
      />
      <FormRow>
        {/* type is an HTML attribute! */}
        <Button color="white" type="reset" onClick={() => onCloseModal?.()}>
          لغو
        </Button>
        <Button color="green" disabled={isWorking}>
          {isEditSession ? "ویرایش شخص" : "ثبت شخص جدید"}
        </Button>
      </FormRow>
    </form>
  );
}

export default EstateForm;
