function FormRowVertical({ label, children }) {
  return (
    <div className="flex flex-col items-end gap-2 mb-2 w-full">
      {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
    </div>
  );
}

export default FormRowVertical;
