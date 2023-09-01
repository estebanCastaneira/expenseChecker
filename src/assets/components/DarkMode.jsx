import Sun from "./Sun";
import Moon from "./Moon";
import { useState } from "react";
import "./DarkMode.css";
function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  const handleOnClik = (e) => {
    const switchWidth = e.currentTarget.offsetWidth;
    const clickX = e.clientX - e.currentTarget.getBoundingClientRect().left;
    const isLeftHalf = clickX <= switchWidth / 2;
    setDarkMode(isLeftHalf);
  };

  if (darkMode) {
    window.document.documentElement.classList.add("dark");
  } else {
    window.document.documentElement.classList.remove("dark");
  }

  return (
    <div
      onClick={(e) => handleOnClik(e)}
      className="w-24 relative flex justify-between items-center bg-orange-400 dark:bg-indigo-800 transition-colors duration-700 hover:cursor-pointer hover:brightness-105 rounded-full p-5"
    >
      <div
        className={`w-8 h-8 rounded-full  absolute  ${
          !darkMode ? "moveR" : "moveL"
        }`}
      ></div>
      <Moon fill={darkMode ? "yellow" : "white"} />
      <Sun fill={!darkMode ? "yellow" : "#dea53b"} />
    </div>
  );
}

export default DarkMode;
