/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react')
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
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
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: 'hsl(209, 23%, 22%)', // or DEFAULT
            foreground: '#ECEDEE', // or 50 to 900 DEFAULT
            darkBlue: 'hsl(209, 23%, 22%)',
            primary: {
              DEFAULT: '#BEF264',
              foreground: '#000000'
            },
            focus: '#fffffff'
          }
        },
        light: {
          colors: {
            background: '#ffffff', // or DEFAULT
            foreground: 'hsl(209, 23%, 22%)', // or 50 to 900 DEFAULT
            darkBlue: 'hsl(209, 23%, 22%)',
            primary: {
              DEFAULT: '#BEF264',
              foreground: '#000000'
            },
            focus: '#fffffff'
          }
        }
      }
    })
  ]
}
