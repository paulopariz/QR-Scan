/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,vue}"
],
  theme: {
    extend: {
      colors: {
        'light': '#FDB623',
        'dark': '#262626',
        'white-2': '#D9D9D9',

      
      }
    },
  },
  plugins: [],

  darkMode: 'class'
}