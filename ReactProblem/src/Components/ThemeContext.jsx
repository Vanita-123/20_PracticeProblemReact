import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [isDarkMode, setisDarkMode] = useState(false);
  const ToggleDarkMode = () => {
    setisDarkMode((prevMode) => !prevMode);
  };
  return (
    <ThemeContext.Provider value={{ isDarkMode, ToggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };
