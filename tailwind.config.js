/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'hsl(209, 23%, 22%)',
        'very-dark-background': 'hsl(207, 26%, 17%)',
        'very-dark-blue': 'hsl(200, 15%, 8%)',
        'dark-gray-input':  'hsl(0, 0%, 52%)',
        'very-dark-light': 'hsl(0, 0%, 98%)',
        'white-dark-mode': 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Adiciona o modo escuro como classe
}
