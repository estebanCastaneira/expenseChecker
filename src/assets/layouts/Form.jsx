import Input from "../components/Input";
function Form() {
  const expenses = [];
  return (
    <>
      <h1 className="text-center text-3xl my-10">Expense Checker</h1>
      <form>
        <div className="container flex flex-col sm:flex-row sm:flex-wrap">
          <Input name={"Expense"} type={"text"} placeholder={"Ex: Visa..."} />
          <Input name={"Expiration"} type={"date"} />
          <Input name={"Amount"} type={"number"} />

          <div className="m-3">
            <label className="mx-2" htmlFor="status">
              Status:{" "}
            </label>
            <select name="status" id="stats" className="p-1 rounded bg-white">
              <option value="notPaid">Not Paid</option>
              <option value="paid">Paid</option>
            </select>
          </div>

          <button className="text-white bg-green-700  border-2 border-green-800 rounded-md p-1">
            Add to the List
          </button>
        </div>
      </form>
    </>
  );
}
export default Form;
