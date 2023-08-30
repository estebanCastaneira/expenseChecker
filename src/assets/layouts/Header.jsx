import Clock from "../components/Clock";
import Fecha from "../components/Fecha";
function Header() {
  return (
    <header className="flex justify-around bg-slate-800 p-4">
      <Fecha />
      <Clock />
    </header>
  );
}

export default Header;
