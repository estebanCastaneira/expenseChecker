import Sun from "./Sun";
import Moon from "./Moon";
function DarkMode() {
  return (
    <div className="w-16 flex justify-between bg-white rounded-xl p-2">
      <Moon color="text-green-500" />
      <Sun color="text-green-200" />
    </div>
  );
}

export default DarkMode;
