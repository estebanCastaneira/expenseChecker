import Edit from "../components/Edit";
import Delete from "../components/Delete";
import Money from "../components/Money";
import Update from "../components/Update";
import TableHeader from "../components/TableHeader";
import { useState } from "react";
function Table({ expenses, setExpenses }) {
  const [editing, setEditing] = useState({ available: false, id: "" });
  const [clicked, setClicked] = useState(false);
  const [newExpense, setNewExpense] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newExpiration, setNewExpiration] = useState("");

  const handleDelete = (e, id) => {
    const expensesUpdate = expenses.filter(
      (element) => expenses.indexOf(element) !== id
    );
    setExpenses([...expensesUpdate]);
  };

  const handleEdit = (e, id, expense) => {
    setClicked(!clicked);
    if (clicked) {
      setNewExpense(expense.expense);
      setNewAmount(expense.amount);
      setNewExpiration(expense.expiration);
      setEditing({ available: !editing.available, id: id });
    } else {
      setEditing({ available: false, id: "" });
    }
  };
  const handleUpdate = (e, id) => {
    const expenseUpdate = expenses.map((element, i) => {
      if (i !== id) {
        return element;
      } else {
        element.expense = newExpense;
        element.amount = newAmount;
        element.expiration = newExpiration;
        return element;
      }
    });
    setEditing({ available: false, id: "" });
    return setExpenses([...expenseUpdate]);
  };
  const handlePaid = (e, id) => {
    const expenseUpdate = expenses.map((element, i) => {
      if (i !== id) {
        return element;
      } else {
        element.isPaid = !element.isPaid;
        return element;
      }
    });
    return setExpenses([...expenseUpdate]);
  };
  const handleOnChange = (e) => {
    if (e.target.id === "newExpense") {
      return setNewExpense(e.target.value);
    }
    if (e.target.id === "newAmount") {
      return setNewAmount(e.target.value);
    }
    if (e.target.id === "newExpiration") {
      return setNewExpiration(e.target.value);
    }
  };
  return (
    <table className="w-full table dark:bg-slate-800 dark:text-white border-4 dark:border-gray-600">
      <TableHeader expenses={expenses} setExpenses={setExpenses} />
      <tbody className="table-row-group ">
        {expenses &&
          expenses.map((expense, i) => (
            <tr className="text-center" key={i}>
              <td className="p-2 table-cell border-2 dark:border-gray-600 relative">
                {expense.expense}
                {editing.available && editing.id === i && (
                  <input
                    className=" text-center dark:bg-slate-700 border-2 dark:border-white rounded-lg absolute left-5  w-5/6"
                    type="text"
                    defaultValue={expense.expense}
                    onChange={handleOnChange}
                    name="newExpense"
                    id="newExpense"
                  />
                )}
              </td>
              <td className="p-2 table-cell border-2 dark:border-gray-600 relative">
                ${expense.amount}
                {editing.available && editing.id === i && (
                  <input
                    className="text-center dark:bg-slate-700 border-2 dark:border-white rounded-lg absolute left-3  w-5/6"
                    type="number"
                    defaultValue={expense.amount}
                    onChange={handleOnChange}
                    name="newAmount"
                    id="newAmount"
                  />
                )}
              </td>
              <td className="p-2 table-cell border-2 dark:border-gray-600 relative">
                {expense.expiration.split("-").reverse().join("-")}
                {editing.available && editing.id === i && (
                  <input
                    className="text-center dark:bg-slate-700 border-2 dark:border-white rounded-lg absolute left-5  w-5/6"
                    type="date"
                    defaultValue={expense.expiration}
                    onChange={handleOnChange}
                    name="newExpiration"
                    id="newExpiration"
                  />
                )}
              </td>
              <td className="p-2 table-cell border-2 dark:border-gray-600 relative">
                {expense.isPaid ? "Paid" : "Not Paid"}
              </td>
              <td className="p-2 table-cell border-2 dark:border-gray-600">
                <div className="flex justify-evenly">
                  <Update
                    handleUpdate={handleUpdate}
                    editing={editing}
                    id={i}
                  />
                  <Edit handleEdit={handleEdit} expense={expense} id={i} />
                  <Money
                    handlePaid={handlePaid}
                    id={i}
                    isPaid={expense.isPaid}
                  />
                  <Delete handleDelete={handleDelete} id={i} />
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
