import Button from "./Button";

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <div className="w-96 flex flex-col gap-3">
      <h3 className="text-2xl font-medium">حذف {resourceName}</h3>
      <p className="text-gray-500 mb-3" dir="rtl">
        آیا از حذف {resourceName} مطمئنید؟
      </p>

      <div className="flex justify-end gap-3">
        <Button
          color="white"
          disabled={disabled}
          onClick={onCloseModal}
          label="لغو"
        />
        <Button
          color="red"
          disabled={disabled}
          onClick={onConfirm}
          label="تأیید"
        />
      </div>
    </div>
  );
}

export default ConfirmDelete;
