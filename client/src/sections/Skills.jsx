import React from 'react';
import { motion } from 'framer-motion';

const SkillCategory = ({ title, skills }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <motion.span 
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-blue-100 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const technicalSkills = [
    "JavaScript (ES6+)", "React", "Node.js", "Express.js", "Python", "Django", 
    "HTML5", "CSS3", "Tailwind CSS", "Git & GitHub", "MongoDB", "PostgreSQL", "Docker", "AWS"
  ];
  const softSkills = [
    "Resolución de Problemas", "Trabajo en Equipo", "Comunicación Efectiva", 
    "Pensamiento Crítico", "Adaptabilidad", "Gestión del Tiempo"
  ];

  return (
    <section id="skills" className="py-16 px-6 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Habilidades
        </motion.h2>
        
        <SkillCategory title="Habilidades Técnicas" skills={technicalSkills} />
        <SkillCategory title="Habilidades Blandas" skills={softSkills} />
        
      </div>
    </section>
  );
};

export default Skills; 