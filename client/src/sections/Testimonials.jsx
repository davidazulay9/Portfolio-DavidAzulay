import React from 'react';
import { motion } from 'framer-motion';

// Podrías usar una librería como react-slick para un carrusel más avanzado
// o implementarlo manualmente.

const TestimonialCard = ({ quote, name, role, company, image }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg text-center flex flex-col items-center"
  >
    {image && <img src={image} alt={name} className="w-20 h-20 rounded-full mb-4 object-cover shadow-md"/>}
    <blockquote className="text-gray-600 dark:text-gray-300 italic mb-4 text-lg">
      " {quote} "
    </blockquote>
    <p className="font-semibold text-gray-800 dark:text-white">{name}</p>
    <p className="text-sm text-blue-600 dark:text-blue-400">{role} {company && `en ${company}`}</p>
  </motion.div>
);

const Testimonials = () => {
  const testimonialData = [
    {
      quote: "David es un desarrollador excepcional, siempre dispuesto a aprender y aportar ideas innovadoras.",
      name: "Jane Doe",
      role: "Project Manager",
      company: "Innovatech",
      // image: "/assets/logos/jane-doe.jpg" // Ejemplo, asegúrate de tener la imagen en assets/logos/
    },
    {
      quote: "Su habilidad para resolver problemas complejos y su dedicación son impresionantes.",
      name: "John Smith",
      role: "Lead Engineer",
      company: "Future Systems",
      // image: "/assets/logos/john-smith.jpg"
    },
    // Añade más testimonios si los tienes
  ];

  // Si no hay testimonios, podrías no renderizar la sección o mostrar un mensaje
  if (testimonialData.length === 0) {
    return null; // Opcional: no renderizar si no hay datos
  }

  return (
    <section id="testimonials" className="py-16 px-6 bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Testimonios
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 