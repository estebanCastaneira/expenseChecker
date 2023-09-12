import Clock from "./Clock";
import Fecha from "./Fecha";
import DarkMode from "./DarkMode";
function Header() {
  return (
    <header className="flex justify-between items-center bg-gradient-to-t from-indigo-100 via-indigo-300 to-indigo-600 dark:from-slate-800 p-4">
      <div>
        <Fecha />
        <Clock />
      </div>
      <DarkMode />
    </header>
  );
}

export default Header;
