/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // o 'media' si prefieres basado en el sistema
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      // Aquí puedes extender la paleta de colores, fuentes, etc.
      // Ejemplo:
      // colors: {
      //   'primary': '#1DA1F2',
      //   'secondary': '#14171A',
      // },
      // fontFamily: {
      //   sans: ['Inter', 'sans-serif'],
      // },
    },
  },
  plugins: [],
} 