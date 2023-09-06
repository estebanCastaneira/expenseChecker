import Header from "./assets/layouts/Header";
import Form from "./assets/layouts/Form";
import Table from "./assets/layouts/Table";
import { useState } from "react";
function App() {
  const [expenses, setExpenses] = useState([]);
  return (
    <>
      <Header />
      <main className="py-9 bg-gradient-to-t from-blue-200 via-yellow-50 to-yellow-100 dark:bg-gradient-to-t dark:from-black dark:to-indigo-900 dark:text-white flex flex-col items-center">
        <Form expenses={expenses} setExpenses={setExpenses} />
      </main>
      <Table expenses={expenses} setExpenses={setExpenses} />
    </>
  );
}

export default App;
