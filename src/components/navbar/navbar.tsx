import { useContext } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { DarkModeContext, DarkModeContextType } from "../../context/dark-mode-context";  // Certifique-se que DarkModeContextType está exportado corretamente

export function Navbar() {
  const context = useContext<DarkModeContextType | undefined>(DarkModeContext);

  if (!context) {
    throw new Error("DarkModeContext must be used within a DarkModeProvider");
  }

  const { toggleDarkMode } = context;

  return (
    <nav className="flex justify-between w-full h-20 shadow-md items-center bg-white dark:bg-dark-blue px-4 lg:px-14">
      <h1 className="font-bold text-xl dark:text-white-dark-mode">Where in the World?</h1>
      <div className="flex items-center gap-1 cursor-pointer">
        <button onClick={toggleDarkMode}>
          <MdOutlineDarkMode className="text-2xl dark:text-white-dark-mode" />
        </button>
        <p className="font-semibold dark:text-white-dark-mode">Dark Mode</p>
      </div>
    </nav>
  );
}
