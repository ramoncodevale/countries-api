import { useContext } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { DarkModeContext } from "../../context/dark-mode-context";

export function Navbar() {
  const { setDarkModeEnabled, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <nav className="flex justify-between w-full h-20 shadow-md items-center bg-white dark:bg-dark-blue px-14">
      <h1 className="font-bold text-xl dark:text-white-dark-mode">Where in the World?</h1>
      <div className="flex items-center gap-1 cursor-pointer">
        <button onClick={toggleDarkMode}>
          <MdOutlineDarkMode className="size-4 dark:text-white-dark-mode" />
        </button>
        <p className="font-semibold dark:text-white-dark-mode">Dark Mode</p>
      </div>
    </nav>
  );
}
