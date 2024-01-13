function FormRowVertical({ label, children }) {
  return (
    <div>
      {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
    </div>
  );
}

export default FormRowVertical;
