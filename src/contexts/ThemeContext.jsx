import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : 'light'; // get theme or set default
  });
  
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', JSON.stringify(newTheme));//update theme on local storage
      return newTheme;
    });
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {//get theme from local storage
      setTheme(JSON.parse(localTheme));
    } else {
      setTheme('light');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
