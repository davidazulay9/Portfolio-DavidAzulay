import React from 'react';
// import useTheme from './hooks/useTheme'; // Ya no es necesario llamarlo aquí directamente
// import Header from './components/Header'; // Comentamos la importación también
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import { ThemeProvider } from './context/ThemeContext.jsx'; // Importamos el ThemeProvider

function App() {
  // useTheme(); // Esta llamada se maneja ahora dentro de ThemeProvider

  return (
    <ThemeProvider> { /* Envolvemos la aplicación con ThemeProvider */ }
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-500 min-h-screen">
        {/* <Header /> */}{/* Comentamos el Header para que no se muestre */}
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          {/* <Projects /> */}
          {/* <Skills /> */}
          {/* <Testimonials />  */}
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App; 