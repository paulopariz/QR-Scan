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
      },

      screens: {
        mn: '375px',
        sm: '642px',
        md: '770px' ,
        lg: '1026px' ,
        xl: '1282px' ,
        '2xl': '1537px' , 
    },
    },
  },
  plugins: [],

}