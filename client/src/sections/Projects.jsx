import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, imageUrl, techStack, liveLink, repoLink }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
    className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col"
  >
    {imageUrl && <img src={imageUrl} alt={title} className="w-full h-48 object-cover"/>}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 flex-grow">{description}</p>
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">Tecnologías:</h4>
        <div className="flex flex-wrap gap-2">
          {techStack.map(tech => (
            <span key={tech} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-auto flex space-x-3 pt-3 border-t border-gray-200 dark:border-gray-700">
        {liveLink && 
          <a href={liveLink} target="_blank" rel="noopener noreferrer" 
             className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium">
            Ver Demo
          </a>}
        {repoLink && 
          <a href={repoLink} target="_blank" rel="noopener noreferrer" 
             className="text-sm text-gray-600 dark:text-gray-400 hover:underline font-medium">
            Ver Código
          </a>}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projectData = [
    {
      title: "Proyecto Alpha",
      description: "Una increíble aplicación web para gestionar tareas y aumentar la productividad. Desarrollada con MERN stack.",
      // imageUrl: "/assets/projects/alpha-preview.jpg", // Asegúrate de tener la imagen en assets/projects/
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      liveLink: "#",
      repoLink: "#"
    },
    {
      title: "Plataforma Beta",
      description: "Sistema de e-commerce con funcionalidades avanzadas de carrito y pagos. Construido con Django y React.",
      // imageUrl: "/assets/projects/beta-preview.jpg",
      techStack: ["Python", "Django", "React", "PostgreSQL", "Stripe API"],
      liveLink: "#",
    },
    // Añade al menos 3-4 proyectos
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-gray-50 dark:bg-gray-850 transition-colors duration-500">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Proyectos Destacados
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 