import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/images/profile.jpeg'; // Imagen de perfil

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Sobre Mí
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"
        >
          <motion.img
            src={profileImage}
            alt="David Azulay"
            className="w-48 h-48 rounded-full object-cover shadow-lg mx-auto md:mx-0 md:w-1/4 md:aspect-square"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <div className="md:w-3/4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed md:mt-0 text-center md:text-justify">
            <p className="mb-4">
              Soy ingeniero en sistemas con una profunda pasión por el desarrollo de software y la creación de soluciones full-stack que no solo cumplen, sino que superan las expectativas. Tengo una mentalidad incansable: no me detengo hasta encontrar la mejor solución posible. Disfruto resolver problemas complejos, y cuando algo no funciona, me obsesiono hasta hacerlo andar. Para mí, cada desafío es una oportunidad para aprender, crecer y entregar resultados de alto impacto.
            </p>
            {/* Añadir más párrafos, foto, etc. */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 