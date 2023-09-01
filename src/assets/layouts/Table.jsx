import Edit from "../components/Edit";
import Delete from "../components/Delete";
function Table({ expenses, setExpenses }) {
  const handleDelete = (e, id) => {
    const expensesUpdate = expenses.filter(
      (element) => expenses.indexOf(element) !== id
    );
    setExpenses([...expensesUpdate]);
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
              <td className="table-cell border-2 dark:border-gray-600">
                {expense.expense}
              </td>
              <td className="table-cell border-2 dark:border-gray-600">
                ${expense.amount}
              </td>
              <td className="table-cell border-2 dark:border-gray-600">
                {expense.expiration}
              </td>
              <td className="table-cell border-2 dark:border-gray-600">
                {expense.isPaid ? "Paid" : "Not Paid"}
              </td>
              <td className="table-cell border-2 dark:border-gray-600">
                <div className="flex justify-evenly">
                  <Edit />
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
