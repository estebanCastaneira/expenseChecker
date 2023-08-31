import Clock from "../components/Clock";
import Fecha from "../components/Fecha";
import DarkMode from "../components/DarkMode";
import Switcher from "../components/DarkModeToggle";
function Header() {
  return (
    <header className="flex justify-between items-center bg-indigo-300 dark:bg-slate-800 p-4">
      <div>
        <Fecha />
        <Clock />
      </div>
      {/* <Switcher /> */}
      <DarkMode />
    </header>
  );
}

export default Header;
