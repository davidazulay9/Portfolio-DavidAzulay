import React from 'react';
import { motion } from 'framer-motion';

const EducationEntry = ({ institution, degree, date, description }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8 p-6 bg-white dark:bg-slate-700 rounded-xl shadow-2xl hover:shadow-cyan-100 dark:hover:shadow-cyan-700/30 transition-shadow duration-300"
    >
        <h3 className="text-xl font-bold text-[rgb(0,188,212)] dark:text-[rgb(0,188,212)] mb-1">{degree}</h3>
        <p className="text-lg font-semibold text-slate-700 dark:text-slate-300">{institution}</p>
        {date && <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{date}</p>}
        {description && <div className="text-slate-600 dark:text-slate-300 prose prose-sm max-w-none">{description}</div>}
    </motion.div>
);

const LanguageEntry = ({ language, details }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8 p-6 bg-white dark:bg-slate-700 rounded-xl shadow-2xl hover:shadow-cyan-100 dark:hover:shadow-cyan-700/30 transition-shadow duration-300"
    >
        <h3 className="text-xl font-bold text-[rgb(0,188,212)] dark:text-[rgb(0,188,212)] mb-1">{language}</h3>
        <div className="text-slate-600 dark:text-slate-300 space-y-2 prose prose-sm max-w-none">
            {details}
        </div>
    </motion.div>
);


const Education = () => {
    const educationData = [
        {
            degree: "Ingeniería en sistemas",
            institution: "Universidad Tecnologica Nacional (Cordoba, Argentina)",
            date: "Febrero 2018 - Diciembre 2024",
        },
        {
            degree: "Bachiller en economía y administración",
            institution: "Instituto Secundario Israelita General San Martin",
            date: "2017",
        },
    ];

    const coursesData = [
        {
            degree: "Desarrollo Full Stack, MERN (MongoDB, Express, React y Node)",
            institution: "Udemy",
            date: "2024",
        }
    ];

    const languagesData = [
        {
            language: "Español",
            details: <p>Nativo</p>,
        },
        {
            language: "Inglés",
            details: (
                <ul className="list-disc list-inside">
                    <li>goFLUENT - CEFR B1+ | goFLUENT B1.4 - Abril 2025</li>
                    <li>First Certificate in English (FCE) - Cambridge University (2016) - Level B2</li>
                    <li>Preliminary English Test (PET) - Cambridge University (2014)</li>
                </ul>
            )
        }
    ];

    return (
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-900 transition-colors duration-500">
            <div className="container mx-auto max-w-5xl">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl sm:text-5xl font-extrabold text-center text-slate-800 dark:text-white mb-16"
                >
                    Educación y Cursos
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-x-12">
                    <div>
                        <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center md:text-left">Educación Formal</h3>
                        {educationData.map((edu, index) => (
                            <EducationEntry key={index} {...edu} />
                        ))}
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center md:text-left">Cursos</h3>
                        {coursesData.map((course, index) => (
                            <EducationEntry key={index} {...course} />
                        ))}
                    </div>
                </div>

                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl sm:text-5xl font-extrabold text-center text-slate-800 dark:text-white mt-20 mb-16"
                >
                    Idiomas
                </motion.h2>

                <div className="max-w-4xl mx-auto">
                    {languagesData.map((lang, index) => (
                        <LanguageEntry key={index} {...lang} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Education; 