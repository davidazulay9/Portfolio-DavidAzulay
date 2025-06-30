import { useState, useEffect } from 'react';

const useTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

  const checkAndUpdateTheme = () => {
    const currentHour = new Date().getHours();
    const isDarkTime = currentHour >= 20 || currentHour < 8;
    setDarkMode(isDarkTime);
    localStorage.setItem('theme', JSON.stringify(isDarkTime));
  };

  useEffect(() => {
    // Verificar el tema inicial
    checkAndUpdateTheme();

    // Configurar un intervalo para verificar la hora cada minuto
    const intervalId = setInterval(checkAndUpdateTheme, 60000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

export default useTheme; 