/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand : '#ff0000',
        border : '#363636',
        ugray : '#272727',
        text : '#f1f1f1',
        bg : '#0F0F0F'
      }
    },
  },
  plugins: [],
}