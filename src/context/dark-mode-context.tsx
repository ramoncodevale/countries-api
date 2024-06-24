import { createContext, useState, ReactNode } from "react";

export type DarkModeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

type DarkModeProviderProps = {
  children: ReactNode;
};

export function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode === 'true' ? true : false;
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode.toString());
      return newMode;
    });
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
