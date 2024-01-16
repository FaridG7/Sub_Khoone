import Button from "./Button";

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <div>
      <h3>Delete {resourceName}</h3>
      <p dir="rtl">آیا از حذف {resourceName} مطمئنید؟</p>

      <div>
        <Button color="white" disabled={disabled} onClick={onCloseModal}>
          Cancel
        </Button>
        <Button color="red" disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
