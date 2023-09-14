import Sun from "./Sun";
import Moon from "./Moon";
import { useState } from "react";
import "./darkmodee.css";
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
    window.document.body.classList.add("dark:bg-slate-900");
  } else {
    window.document.documentElement.classList.remove("dark");
    window.document.body.classList.remove("dark:bg-slate-900");
  }

  return (
    <div
      onClick={(e) => handleOnClik(e)}
      className="w-24 relative flex justify-between items-center bg-gradient-to-t from-yellow-100 via-white to-yellow-100 dark:bg-gradient-to-t dark:from-indigo-900 dark:via-indigo-700 dark:to-indigo-900 hover:cursor-pointer hover:brightness-105 rounded-full p-5"
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
