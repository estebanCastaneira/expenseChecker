function Table({ expenses }) {
  return (
    <table className="w-full table bg-slate-800 text-white border-4 border-gray-600">
      <thead className="table-header-group">
        <tr>
          <th className="table-cell border-2 border-gray-600" scope="col">
            Expense
          </th>
          <th className="table-cell border-2 border-gray-600" scope="col">
            Amount
          </th>
          <th className="table-cell border-2 border-gray-600" scope="col">
            Expiration
          </th>
          <th className="table-cell border-2 border-gray-600" scope="col">
            Status
          </th>
          <th className="table-cell border-2 border-gray-600" scope="col">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
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
      </tbody>
    </table>
  );
}

export default Table;
