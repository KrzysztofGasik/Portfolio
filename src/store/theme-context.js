import React, { useState } from "react";

export const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
});

const ThemeProvider = (props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const themeToggleHandler = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ isDarkTheme, toggleTheme: themeToggleHandler }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
