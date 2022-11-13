const colors = require('tailwindcss/colors')


module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...colors,
      'buttonColor': '#FA4747'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}