import Sun from "./Sun";
import Moon from "./Moon";
import { useState } from "react";
function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  const [animation, setAnimation] = useState(false);
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
      className="w-24 flex justify-between items-center bg-orange-200 dark:bg-indigo-800 hover:cursor-pointer hover:brightness-110 rounded-full p-2.5"
    >
      {/* <div className="w-7 h-7 bg-white rounded-full absolute opacity-30"></div> */}
      <Moon
        color="text-yellow-500"
        fill={darkMode && "yellow"}
        classes={!darkMode && ""}
      />
      <Sun
        color="text-yellow-500"
        fill={!darkMode && "yellow"}
        classes={darkMode && ""}
      />
    </div>
  );
}

export default DarkMode;
