/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Nunito Sans', 'sans-serif']
    },
    extend: {
      colors: {
        darkBlue: 'hsl(209, 23%, 22%)',
        veryDarkBlue: 'hsl(200, 15%, 8%)',
        darkGray: 'hsl(0, 0%, 52%)',
        lightGray: 'hsl(0, 0%, 98%)'
      }
    }
  },
  plugins: []
}
