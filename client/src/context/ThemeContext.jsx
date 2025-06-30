// src/context/ThemeContext.jsx
import React, { createContext } from 'react';
import useTheme from '../hooks/useTheme.js'; // Importamos useTheme

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useTheme(); // Usamos el hook

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const contextValue = {
    darkMode,
    toggleDarkMode // Proveemos la función para cambiar el tema
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}; 