import Sun from "./Sun";
import Moon from "./Moon";
function DarkMode() {
  return (
    <div className="w-16 flex justify-between bg-white rounded-xl p-2">
      <Moon color="text-green" />
      <Sun color="green" />
    </div>
  );
}

export default DarkMode;
