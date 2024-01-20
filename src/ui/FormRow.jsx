function FormRow({ label, error, children }) {
  return (
    <div className="py-2">
      {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
      {error && <span>{error}</span>}
    </div>
  );
}

export default FormRow;
