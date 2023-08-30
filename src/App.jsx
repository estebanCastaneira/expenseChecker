import "./App.css";
import Header from "./assets/layouts/Header";
import Form from "./assets/layouts/Form";
import Table from "./assets/layouts/Table";
function App() {
  return (
    <>
      <Header />
      <main className="py-9 bg-orange-200">
        <Form />
      </main>
      <Table />
    </>
  );
}

export default App;
