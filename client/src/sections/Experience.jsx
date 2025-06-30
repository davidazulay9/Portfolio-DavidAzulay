import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Componente auxiliar para mostrar logo o texto de fallback
const TechLogoDisplay = ({ techName, logoPath }) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <span 
        className="px-2 py-1 bg-slate-200 dark:bg-slate-600 text-xs rounded-md text-slate-700 dark:text-slate-300 whitespace-nowrap"
        title={techName}
      >
        {techName}
      </span>
    );
  }

  return (
    <img 
      src={logoPath}
      alt={`${techName} logo`}
      className="h-10 w-10 object-contain transition-transform duration-200 hover:scale-110"
      title={techName}
      onError={() => setImageError(true)}
    />
  );
};

const ExperienceItem = ({ title, company, dates, description, logo, technologies }) => {
  // Función para generar el nombre del archivo del logo, movida aquí para mejor claridad
  const generateLogoPath = (techName) => {
    let filename = techName.toLowerCase();
    // Casos especiales para nombres de archivo
    if (filename === "c#") filename = "c-sharp";
    else if (filename === "materialui") filename = "material-ui";
    else if (filename === "aws s3") filename = "amazonaws";
    else if (filename === "googleads") filename = "google-ads";
    filename = filename.replace(/\s+/g, '-').replace(/\./g, '');
    return `/logos/${filename}.svg`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-10 p-6 bg-white dark:bg-slate-700 rounded-xl shadow-2xl flex flex-col sm:flex-row items-start sm:space-x-6 hover:shadow-cyan-100 dark:hover:shadow-cyan-700/30 transition-shadow duration-300"
    >
      {logo && (
        <div className="flex-shrink-0 w-16 h-16 mb-4 sm:mb-0">
          <img src={logo} alt={`${company} logo`} className="w-full h-full object-contain rounded-lg shadow-md"/>
        </div>
      )}
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-[rgb(0,188,212)] dark:text-[rgb(0,188,212)] mb-1">{title}</h3>
        <p className="text-lg font-semibold text-slate-700 dark:text-slate-300">{company}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{dates}</p>
        <div className="text-slate-600 dark:text-slate-300 space-y-2 prose prose-sm max-w-none mb-4">
          {typeof description === 'string' ? <p>{description}</p> : description}
        </div>
        {technologies && technologies.length > 0 && (
          <div className="flex items-center gap-3 mt-4">
            <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 whitespace-nowrap">Tecnologías:</h4>
            <div className="flex flex-wrap gap-3 items-center">
              {technologies.map((tech, index) => (
                <TechLogoDisplay 
                  key={index} 
                  techName={tech} 
                  logoPath={generateLogoPath(tech)} 
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Desarrollador Web Full Stack",
      company: "Simja S.A.",
      dates: "Enero 2025 - Actualidad",
      description: (
        <>
          <p className="mb-2">RESPONSABILIDADES:</p>
          <ul className="list-disc list-inside mb-2">
            <li>Diseñé e implementé desde cero un sistema web para la gestión integral de alquileres.</li>
            <li>Automaticé procesos como carga de contratos, conciliación de pagos, aumentos automáticos de alquiler según período y cláusulas, generación de recibos y envío de notificaciones vía email y WhatsApp.</li>
            <li>Incluí autenticación segura con JWT, manejo de roles, validaciones de datos y dashboards administrativos.</li>
            <li>El sistema redujo en más de <span className="font-bold text-cyan-500">30 horas mensuales</span> las tareas operativas, mejorando la trazabilidad, precisión y eficiencia en la administración inmobiliaria.</li>
          </ul>
        </>
      ),
      technologies: ["Cursor", "Vite", "Node.js", "React.js", "MaterialUI", "MySQL", "JWT", "Bcrypt", "GitHub", "Insomnia", "SendGrid", "AWS S3"],
      // logo: "/path/to/simja-logo.png" // Ejemplo
    },
    {
      title: "Pasantía como Desarrollador Web Full Stack",
      company: "Grupo Ecipsa",
      dates: "Agosto 2024 - Diciembre 2024",
      description: (
        <>
          <p className="mb-2">RESPONSABILIDADES:</p>
          <ul className="list-disc list-inside mb-2">
            <li>Diseñé y desarrollé desde cero una nueva plataforma web para sorteos de adjudicaciones, reemplazando un sistema anterior lento, poco intuitivo y sin acceso al código fuente.</li>
            <li>Implementé la solución con el stack MERN, enfocándome en la escalabilidad, el rendimiento y la experiencia del usuario.</li>
            <li>Automaticé procesos críticos, mejorando la eficiencia operativa y reduciendo los tiempos de ejecución. El nuevo sistema ofreció una interfaz moderna, mayor confiabilidad y control total sobre el código y la infraestructura.</li>
          </ul>
        </>
      ),
      technologies: ["Node.js", "React.js", "MaterialUI", "Express.js", "MongoDB"],
      // logo: "/path/to/grupoecipsa-logo.png" // Ejemplo
    },
    {
      title: "Desarrollador Fullstack independiente",
      company: "Independiente",
      dates: "Febrero 2023 - Julio 2023",
      description: (
        <>
          <p className="mb-2">RESPONSABILIDADES:</p>
          <ul className="list-disc list-inside mb-2">
            <li>Diseñé e implementé una solución para la administración de datos de una aerolínea, cumpliendo con los requisitos del negocio.</li>
            <li>Automatizé procesos clave mediante la programación de la lógica del sistema en Python.</li>
            <li>Diseñé y administré bases de datos en MySQL, garantizando almacenamiento eficiente y seguro.</li>
            <li>Optimicé el flujo de información integrando Python con la base de datos MySQL.</li>
          </ul>
        </>
      ),
      technologies: ["Python", "MySQL"],
      // logo: "/path/to/yourlogo.png" // Ejemplo
    },
    {
      title: "Líder de proyecto",
      company: "RevenEntertainment",
      dates: "Diciembre 2019 - Julio 2020",
      description: (
        <>
          <p className="mb-2">RESPONSABILIDADES:</p>
          <ul className="list-disc list-inside mb-2">
            <li>Lideré equipos multidisciplinarios en la planificación, desarrollo y lanzamiento de videojuegos para Android.</li>
            <li>Desarrollé experiencias inmersivas y optimizadas utilizando Unity y programación en C#.</li>
            <li>Supervisé el lanzamiento en Google Play, garantizando cumplimiento de políticas y estrategias de visibilidad.</li>
            <li>Implementé Google Ads para monetización, maximizando ingresos a través de anuncios.</li>
          </ul>
        </>
      ),
      technologies: ["C#", "Unity", "GoogleAds", "Android Studio"],
      // logo: "/path/to/revenentertainment-logo.png" // Ejemplo
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-900 transition-colors duration-500">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold text-center text-slate-800 dark:text-white mb-16"
        >
          Experiencia Laboral
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 