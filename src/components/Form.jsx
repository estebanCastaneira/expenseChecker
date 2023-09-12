import Input from "./Input";
import { useState } from "react";

function Form({ setExpenses, expenses }) {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [expiration, setExpiration] = useState("");
  const [isPaid, setIsPaid] = useState(false);

  const handleSelect = (e) => {
    return setIsPaid(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expense && amount && expiration) {
      setExpenses([
        ...expenses,
        {
          expense,
          amount,
          expiration,
          isPaid,
        },
      ]);
      return setExpense(""), setAmount(""), setExpiration(""), setIsPaid(false);
    }
  };

  return (
    <>
      <h1 className="text-center font-semibold text-3xl my-10">
        Expense Checker
      </h1>
      <form className="flex justify-center" onSubmit={handleSubmit}>
        <div className="flex flex-col w-full justify-center items-center sm:flex-row sm:flex-wrap sm:w-96 md:w-2/3 ">
          <Input
            name={"Expense"}
            type={"text"}
            placeholder={"Ex: Visa..."}
            setter={setExpense}
            value={expense}
          />
          <Input
            name={"Amount"}
            type={"number"}
            placeholder={"Ex: $1000..."}
            setter={setAmount}
            value={amount}
          />
          <Input
            name={"Expiration"}
            type={"date"}
            setter={setExpiration}
            value={expiration}
          />

          <div className="m-3 flex flex-col w-full md:w-2/5">
            <label className="my-2" htmlFor="status">
              Status:
            </label>
            <select
              name="status"
              id="stats"
              className="p-2 rounded bg-white dark:bg-slate-800"
              onChange={handleSelect}
              value={isPaid}
            >
              <option value={false}>Not Paid</option>
              <option value={true}>Paid</option>
            </select>
          </div>
          <div className="w-3/5 flex justify-center my-5 sm:w-10/12  sm:justify-end transition-all hover:scale-y-95">
            <button
              className="text-white border-2 hover:brightness-110 bg-green-700   border-green-800 dark:bg-cyan-800 dark:border-cyan-700 rounded-md p-1"
              type="submit"
            >
              Add to the List
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
export default Form;
