import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const lightOrDark = () => {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 18 ? 'light' : 'dark';
  };

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : lightOrDark(); // get theme or set default based on time
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', JSON.stringify(newTheme)); // update theme in local storage
      return newTheme;
    });
  };

  useEffect(() => {
    // This effect ensures the theme is consistent if localStorage is manually changed outside the app
    const handleStorageChange = () => {
      const localTheme = localStorage.getItem('theme');
      if (localTheme) {
        setTheme(JSON.parse(localTheme));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
