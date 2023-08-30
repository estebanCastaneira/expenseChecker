function Input({ name, type, placeholder }) {
  return (
    <div className="m-3 w-2/5 flex flex-col">
      <label className="mr-2" htmlFor={name.toLowerCase()}>
        {name}:
      </label>
      <input
        type={type}
        name={name.toLowerCase()}
        id={name.toLowerCase()}
        placeholder={placeholder}
        min={0}
        className="rounded"
      />
    </div>
  );
}

export default Input;
