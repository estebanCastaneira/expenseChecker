import Clock from "../components/Clock";
import Fecha from "../components/Fecha";
import DarkMode from "../components/DarkMode";
function Header() {
  return (
    <header className="flex justify-between items-center bg-slate-800 p-4">
      <div>
        <Fecha />
        <Clock />
      </div>

      <DarkMode />
    </header>
  );
}

export default Header;
