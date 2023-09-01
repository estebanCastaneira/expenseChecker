import Actions from "../components/Actions";
function Table({ expenses }) {
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
            Actions
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
                <Actions />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
