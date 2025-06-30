import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
// import { Mail, Linkedin, GitHub } from 'lucide-react'; // Ejemplo de iconos, puedes usar otros

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!formData.name || !formData.email || !formData.message) {
      setError("Por favor, rellena todos los campos.");
      return;
    }
    
    setIsSubmitting(true);
    setError(null);

    // Reemplaza con tus IDs de EmailJS. Puedes encontrarlos en tu cuenta de EmailJS.
    const serviceID = 'service_mcf6ttk';
    const templateID = 'template_mhcso0z';
    const publicKey = 'beeoPrqAWPkK6WY7G';

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitted(true);
        setIsSubmitting(false);
        // Opcional: Resetear el formulario tras el envío exitoso
        // setFormData({ name: '', email: '', message: '' });
      }, (err) => {
        console.error('FAILED...', err);
        setError('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-16 px-6 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto max-w-3xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4"
        >
          ¡Hablemos!
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-gray-600 dark:text-gray-300 mb-10"
        >
          Si tienes alguna pregunta, propuesta o simplemente quieres saludar, no dudes en contactarme.
        </motion.p>

        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-6 bg-green-100 dark:bg-green-700 text-green-700 dark:text-green-100 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">¡Gracias por tu mensaje!</h3>
            <p>Me pondré en contacto contigo pronto.</p>
          </motion.div>
        ) : (
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-xl"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Nombre</label>
              <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange}
                     className="mt-1 block w-full px-4 py-2.5 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:text-white" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
              <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange}
                     className="mt-1 block w-full px-4 py-2.5 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:text-white" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Mensaje</label>
              <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2.5 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:text-white"></textarea>
            </div>
            <div>
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </motion.button>
            </div>
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default Contact; 