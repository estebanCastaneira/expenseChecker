import Input from "../components/Input";
import { useState } from "react";
function Form() {
  const [expenses, setExpenses] = useState([]);
  return (
    <>
      <h1 className="text-center text-3xl my-10">Expense Checker</h1>
      <form className="flex justify-center">
        <div className="flex flex-col justify-center items-center sm:flex-row sm:flex-wrap sm:w-96 md:w-2/3 ">
          <Input name={"Expense"} type={"text"} placeholder={"Ex: Visa..."} />
          <Input name={"Amount"} type={"number"} />
          <Input name={"Expiration"} type={"date"} />

          <div className="m-3 flex flex-col w-2/5">
            <label className="mr-2" htmlFor="status">
              Status:
            </label>
            <select name="status" id="stats" className="p-1 rounded bg-white">
              <option value="notPaid">Not Paid</option>
              <option value="paid">Paid</option>
            </select>
          </div>
          <div className="w-2/5 flex justify-center my-5 sm:w-10/12  sm:justify-end">
            <button className="text-white bg-green-700  border-2 border-green-800 rounded-md p-1">
              Add to the List
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
export default Form;
