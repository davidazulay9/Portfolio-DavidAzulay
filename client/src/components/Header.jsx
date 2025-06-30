import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors duration-500">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-gray-800 dark:text-white">
          David Azulay
        </a>
        <div className="flex items-center space-x-4">
          {/* Aquí podrías añadir enlaces de navegación si los necesitas en el header */}
          {/* Ejemplo:
          <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Sobre Mí</a>
          <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Proyectos</a>
          <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Contacto</a>
          */}
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header; 