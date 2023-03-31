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
        'dark': '#333333',
      }
    },
  },
  plugins: [],
}