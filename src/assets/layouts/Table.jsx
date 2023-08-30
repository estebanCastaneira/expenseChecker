function Table({ expenses }) {
  return (
    <table className="w-full table bg-slate-800 text-white border-4 border-gray-600">
      <tr className="table-header-group">
        <th className="table-cell border-2 border-gray-600">Expense</th>
        <th className="table-cell border-2 border-gray-600">Amount</th>
        <th className="table-cell border-2 border-gray-600">Expiration</th>
        <th className="table-cell border-2 border-gray-600">Status</th>
        <th className="table-cell border-2 border-gray-600">Actions</th>
      </tr>
      {expenses &&
        expenses.map((expense) => (
          <tr className="table-row-group">
            <td className="table-cell border-2 border-gray-600">
              {expense.expense}
            </td>
            <td className="table-cell border-2 border-gray-600">
              {expense.amount}
            </td>
            <td className="table-cell border-2 border-gray-600">
              {expense.expiration}
            </td>
            <td className="table-cell border-2 border-gray-600">
              {expense.status}
            </td>
            <td className="table-cell border-2 border-gray-600"></td>
          </tr>
        ))}
    </table>
  );
}

export default Table;
