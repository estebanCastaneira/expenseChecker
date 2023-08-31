import Sun from "./Sun";
import Moon from "./Moon";
import { useState, useEffect } from "react";
function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  const handleOnClik = (e) => {
    const switchWidth = e.currentTarget.offsetWidth;
    const clickX = e.clientX - e.currentTarget.getBoundingClientRect().left;
    const isLeftHalf = clickX >= switchWidth / 2;
    setDarkMode(isLeftHalf);
  };

  useEffect(() => {
    if (darkMode) {
      window.document.documentElement.classList.add("dark");
    } else {
      window.document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div
      onClick={(e) => handleOnClik(e)}
      className="w-24 flex justify-between items-center bg-indigo-700 hover:cursor-pointer hover:brightness-110 rounded-full p-2"
    >
      <Moon color="text-green-500" fill="" />
      <Sun color="text-green-200" fill="" />
    </div>
  );
}

export default DarkMode;
