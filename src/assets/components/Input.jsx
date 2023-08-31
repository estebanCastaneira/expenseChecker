function Input({ name, type, placeholder }) {
  return (
    <div className="m-3 w-2/5 flex flex-col">
      <label className="my-2" htmlFor={name.toLowerCase()}>
        {name}:
      </label>
      <input
        type={type}
        name={name.toLowerCase()}
        id={name.toLowerCase()}
        placeholder={placeholder}
        min={0}
        className="rounded dark:bg-slate-800 p-1.5"
      />
    </div>
  );
}

export default Input;
