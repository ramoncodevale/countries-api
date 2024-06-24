import { useContext } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { DarkModeContext, DarkModeContextType } from "../../context/dark-mode-context";

export function Navbar() {
  const context = useContext<DarkModeContextType | undefined>(DarkModeContext);

  if (!context) {
    throw new Error("DarkModeContext must be used within a DarkModeProvider");
  }

  const { toggleDarkMode, darkMode } = context;

  return (
    <nav className={`flex justify-between w-full h-20 shadow-md items-center ${darkMode ? 'bg-dark-blue' : 'bg-white'} px-4 lg:px-14`}>
      <h1 className={`font-bold text-xl ${darkMode ? 'text-white-dark-mode' : 'text-very-dark-blue'}`}>Where in the World?</h1>
      <div className="flex items-center gap-1 cursor-pointer">
        <button onClick={toggleDarkMode}>
          <MdOutlineDarkMode className={`text-2xl ${darkMode ? 'text-white-dark-mode' : 'text-very-dark-blue'}`} />
        </button>
        <p className={`font-semibold ${darkMode ? 'text-white-dark-mode' : 'text-very-dark-blue'}`}>Dark Mode</p>
      </div>
    </nav>
  );
}
