/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'black-100':"#000000",
        "orange":"#F15A29",
        "yellowDark":"#FFD540",
        "yellowLight":"#FFE58C",
        "lightWhite":"#CCCCCC",
        "greyWhite":"#EBECF5",
        "blueShade":"#3C479D",
      }
    },
  },
  plugins: [],
}