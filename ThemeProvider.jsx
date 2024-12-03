import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if(theme === "dark"){
      document.querySelector("body").classList.remove("light");

      document.querySelector("body").classList.add("dark");
    }
    else
    {
      document.querySelector("body").classList.remove("dark");
      document.querySelector("body").classList.add("light");

    }
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};