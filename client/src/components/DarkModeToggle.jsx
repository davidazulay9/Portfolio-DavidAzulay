import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';
// Podrías usar iconos de una librería como lucide-react o heroicons
// import { Sun, Moon } from 'lucide-react'; 

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  if (toggleDarkMode === undefined) {
    console.warn("DarkModeToggle: toggleDarkMode no está disponible desde ThemeContext.");
    return null;
  }

  return (
    <button 
      onClick={toggleDarkMode} 
      className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
      aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
    >
      {darkMode ? (
        // <Sun size={20} /> // Icono de Sol
        <span role="img" aria-label="sun">🌞</span>
      ) : (
        // <Moon size={20} /> // Icono de Luna
        <span role="img" aria-label="moon">🌜</span>
      )}
    </button>
  );
};

export default DarkModeToggle; 