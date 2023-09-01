import "./App.css";
import Header from "./assets/layouts/Header";
import Form from "./assets/layouts/Form";
import Table from "./assets/layouts/Table";
import { useEffect, useState } from "react";
function App() {
  useEffect(() => {
    window.document.documentElement.classList.add(
      "transition-color",
      "duration-200"
    );
  }, []); // TODO
  const [expenses, setExpenses] = useState([]);
  return (
    <>
      <Header />
      <main className="py-9 bg-orange-200 dark:bg-indigo-800 dark:text-white flex flex-col items-center">
        <Form setExpenses={setExpenses} expenses={expenses} />
      </main>
      <Table expenses={expenses} />
    </>
  );
}

export default App;
