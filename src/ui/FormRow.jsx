function FormRow({ label, error, children }) {
  return (
    <div className="py-2 text-left space-x-4 flex justify-between">
      {children}
      {label && <label htmlFor={children.props.id}>{label}</label>}
      {error && <span>{error}</span>}
    </div>
  );
}

export default FormRow;
