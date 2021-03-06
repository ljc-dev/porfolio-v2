const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: colors.red,
      },
      fontFamily: {
        "bot": ["Roboto",],
        "open": ["OpenSans",],
        "mont": ["Montserrat",],
        "merri": ["Merriweather",],
        "rale": ["Raleway",],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
