/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [],
  theme: {
    extend: {},
    colors: {
      primary: {
        DEFAULT: '#00DC82',
        50: '#E6FDF4',
        100: '#D0FCE9',
        200: '#A1F6D0',
        300: '#72F1B7',
        400: '#43EC9E',
        500: '#00DC82',
        600: '#00A86A',
        700: '#007651',
        800: '#004D38',
        900: '#00241F',
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    }
  },
  plugins: [],
}

