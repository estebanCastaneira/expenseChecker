import { useState } from "react";
function TableHeader({ expenses, setExpenses }) {
  const [expSorted, setExpSorted] = useState(false);
  const [amoSorted, setAmoSorted] = useState(false);
  const [expiSorted, setExpiSorted] = useState(false);

  const handleExpense = () => {
    if (!expSorted) {
      const expensesSorted = expenses.sort((a, b) => {
        const nameA = a.expense.toLowerCase();
        const nameB = b.expense.toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      setExpSorted(true);
      return setExpenses([...expensesSorted]);
    }
    const expensesSorted = expenses.sort((a, b) => {
      const nameA = a.expense.toLowerCase();
      const nameB = b.expense.toLowerCase();
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    });
    setExpSorted(false);
    return setExpenses([...expensesSorted]);
  };
  const handleAmount = () => {
    if (!amoSorted) {
      const expensesSorted = expenses.sort((a, b) => {
        const amountA = a.amount;
        const amountB = b.amount;
        return amountA - amountB;
      });
      setAmoSorted(true);
      return setExpenses([...expensesSorted]);
    }
    const expensesSorted = expenses.sort((a, b) => {
      const amountA = a.amount;
      const amountB = b.amount;
      return amountB - amountA;
    });
    setAmoSorted(false);
    return setExpenses([...expensesSorted]);
  };
  const handleExpiration = () => {
    if (!expiSorted) {
      const expensesSorted = expenses.sort((a, b) => {
        const dateA = a.expiration;
        const dateB = b.expiration;
        if (dateA < dateB) {
          return -1;
        }
        if (dateA > dateB) {
          return 1;
        }
        return 0;
      });
      setExpiSorted(true);
      return setExpenses([...expensesSorted]);
    }
    const expensesSorted = expenses.sort((a, b) => {
      const dateA = a.expiration;
      const dateB = b.expiration;
      if (dateA < dateB) {
        return 1;
      }
      if (dateA > dateB) {
        return -1;
      }
      return 0;
    });
    setExpiSorted(false);
    return setExpenses([...expensesSorted]);
  };
  const handlePaid = () => {
    const expensesSorted = expenses.sort((a, b) => {
      const statusA = a.isPaid;
      const statusB = b.isPaid;
      if (statusA !== statusB) {
        return 1;
      }
      if (statusA === statusB) {
        return -1;
      }
    });
    setExpenses([...expensesSorted]);
  };
  return (
    <thead className="table-header-group">
      <tr>
        <th
          className="table-cell border-2 bg-indigo-300 dark:bg-slate-900 dark:border-gray-600 hover:cursor-pointer"
          scope="col"
          onClick={handleExpense}
        >
          Expense
        </th>
        <th
          className="table-cell border-2 bg-indigo-300 dark:bg-slate-900 dark:border-gray-600 hover:cursor-pointer"
          scope="col"
          onClick={handleAmount}
        >
          Amount
        </th>
        <th
          className="table-cell border-2 bg-indigo-300 dark:bg-slate-900 dark:border-gray-600 hover:cursor-pointer"
          scope="col"
          onClick={handleExpiration}
        >
          Expiration
        </th>
        <th
          className="table-cell border-2 bg-indigo-300 w-2/12 dark:bg-slate-900 dark:border-gray-600 hover:cursor-pointer"
          scope="col"
          onClick={handlePaid}
        >
          Status
        </th>
        <th
          className="table-cell border-2 bg-indigo-300 w-4/12 dark:bg-slate-900 dark:border-gray-600"
          scope="col"
        >
          <div className="flex justify-evenly">Actions</div>
        </th>
      </tr>
    </thead>
  );
}

export default TableHeader;
