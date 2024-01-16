function FormRow({ label, error, children }) {
  return (
    <div>
      {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
      {error && <span>{error}</span>}
    </div>
  );
}

export default FormRow;
