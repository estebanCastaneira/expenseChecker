import Edit from "../components/Edit";
import Delete from "../components/Delete";
import Money from "../components/Money";
import Save from "../components/Save";
import { useState } from "react";
function Table({ expenses, setExpenses }) {
  const [editing, setEditing] = useState({ available: false, id: "" });
  const [clicked, setClicked] = useState(false);

  const handleDelete = (e, id) => {
    const expensesUpdate = expenses.filter(
      (element) => expenses.indexOf(element) !== id
    );
    setExpenses([...expensesUpdate]);
  };
  const handleEdit = (e, id) => {
    setClicked(!clicked);
    if (clicked) {
      setEditing({ available: !editing.available, id: id });
    } else {
      setEditing({ available: false, id: "" });
    }
  };
  const handlePaid = (e, id) => {
    const expenseUpdate = expenses.map((element, i) => {
      if (i === id) {
        element.isPaid = !element.isPaid;
        return element;
      } else {
        return element;
      }
    });
    setExpenses([...expenseUpdate]);
  };

  return (
    <table className="w-full table dark:bg-slate-800 dark:text-white border-4 dark:border-gray-600">
      <thead className="table-header-group">
        <tr>
          <th
            className="table-cell border-2 bg-indigo-300 dark:bg-slate-900 dark:border-gray-600"
            scope="col"
          >
            Expense
          </th>
          <th
            className="table-cell border-2 bg-indigo-300 dark:bg-slate-900 dark:border-gray-600"
            scope="col"
          >
            Amount
          </th>
          <th
            className="table-cell border-2 bg-indigo-300 dark:bg-slate-900 dark:border-gray-600"
            scope="col"
          >
            Expiration
          </th>
          <th
            className="table-cell border-2 bg-indigo-300 dark:bg-slate-900 dark:border-gray-600"
            scope="col"
          >
            Status
          </th>
          <th
            className="table-cell border-2 bg-indigo-300 dark:bg-slate-900 dark:border-gray-600"
            scope="col"
          >
            <div className="flex justify-evenly">Actions</div>
          </th>
        </tr>
      </thead>
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
                  />
                )}
              </td>
              <td className="p-2 table-cell border-2 dark:border-gray-600 relative">
                {expense.expiration}
                {editing.available && editing.id === i && (
                  <input
                    className="text-center dark:bg-slate-700 border-2 dark:border-white rounded-lg absolute left-5  w-5/6"
                    type="date"
                    defaultValue={expense.expiration}
                  />
                )}
              </td>
              <td className="p-2 table-cell border-2 dark:border-gray-600 relative">
                {expense.isPaid ? "Paid" : "Not Paid"}
              </td>
              <td className="p-2 table-cell border-2 dark:border-gray-600">
                <div className="flex justify-evenly">
                  <Save editing={editing} id={i} />
                  <Edit handleEdit={handleEdit} id={i} />
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
