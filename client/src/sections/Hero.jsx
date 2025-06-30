import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext'; // Asegúrate que esta ruta es correcta
import heroBackground from '../assets/images/spaceHero.png'; // Cambiado a spaceHero.png

const Hero = () => {
  const { darkMode } = useContext(ThemeContext); // Asumimos que ThemeContext provee darkMode

  // Si ThemeContext no está listo o no provee darkMode directamente, 
  // podrías obtenerlo de useTheme si ese hook está centralizado en App.jsx o un proveedor
  // Por ahora, para que no falle, podemos dar un valor por defecto si darkMode es undefined:
  // const isDark = darkMode === undefined ? false : darkMode;

  return (
    <section 
      className={`min-h-screen flex flex-col justify-center items-center px-6 
                         text-center 
                         transition-colors duration-500`}
      style={{ 
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <motion.h1 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="text-4xl md:text-6xl font-bold text-white mb-4"> 
        SOFTWARE ENGINEER
      </motion.h1>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="text-3xl md:text-5xl font-bold text-white mb-4"> 
        FULL STACK DEVELOPER
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.2 }} // Ajustado el delay
        className="text-2xl md:text-4xl text-gray-100 mb-4">
        David Azulay
      </motion.p>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.4 }} // Ajustado el delay
        className="text-lg md:text-xl text-gray-300 mb-2 max-w-2xl">
        Junior Fullstack Developer @ SimjaSA
      </motion.p>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.6 }} // Ajustado el delay
        className="text-md md:text-lg text-gray-400 mb-10 max-w-2xl">
        Previously @ EcipsaGroup
      </motion.p>
      <div className="flex flex-col sm:flex-row gap-4">
        <motion.a 
          href="#contact" 
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(59,130,246)" }} // Sombra azul en hover
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="inline-block px-8 py-3 bg-blue-600 text-white 
                     rounded-lg shadow-md font-semibold text-lg
                     hover:bg-blue-700 transition-colors duration-300">
          Contáctame
        </motion.a>
        <motion.a 
          href="http://www.linkedin.com/in/azulaydavid"
          target="_blank" // Para abrir en una nueva pestaña
          rel="noopener noreferrer" // Por seguridad y SEO
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(10,102,194)" }} // Sombra azul de LinkedIn
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="inline-block px-8 py-3 bg-sky-700 text-white  // Color similar a LinkedIn
                     rounded-lg shadow-md font-semibold text-lg
                     hover:bg-sky-800 transition-colors duration-300">
          LinkedIn
        </motion.a>
        <motion.a 
          href="https://github.com/davidazulay9"
          target="_blank" // Para abrir en una nueva pestaña
          rel="noopener noreferrer" // Por seguridad y SEO
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(150,150,150)" }} 
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="inline-block px-8 py-3 bg-gray-800 text-white
                     rounded-lg shadow-md font-semibold text-lg
                     hover:bg-black transition-colors duration-300">
          GitHub
        </motion.a>
      </div>

      {/* Flecha hacia abajo */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10" // Posicionamiento absoluto en la parte inferior
      >
        <motion.svg
          animate={{ y: [0, 5, 0] }} // Animación de rebote
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          width="32" // Aumentamos el tamaño
          height="32" // Aumentamos el tamaño
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white" // Cambiamos el color a blanco para mayor contraste
        >
          <path
            d="M12 19V5M12 19L19 12M12 19L5 12"
            stroke="currentColor"
            strokeWidth="2.5" // Aumentamos el grosor del trazo
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>
    </section>
  );
};

export default Hero; 