import { createContext, useState, useEffect, ReactNode, FC } from 'react';

interface DarkModeContextValue {
  darkModeEnabled: boolean;
  toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextValue | undefined>(undefined);

interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeProvider: FC<DarkModeProviderProps> = ({ children }) => {
  const [darkModeEnabled, setDarkModeEnabled] = useState<boolean>(
    localStorage.getItem('darkModeEnabled') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('darkModeEnabled', darkModeEnabled.toString());
    if (darkModeEnabled) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkModeEnabled]);

  const toggleDarkMode = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  return (
    <DarkModeContext.Provider value={{ darkModeEnabled, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
