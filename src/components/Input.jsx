function Input({ name, type, placeholder, value, setter }) {
  const handleOnChange = (e) => {
    return setter(e.target.value);
  };

  return (
    <div className="m-3 w-full md:w-2/5 flex flex-col">
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
        onChange={handleOnChange}
        value={value}
      />
    </div>
  );
}

export default Input;
