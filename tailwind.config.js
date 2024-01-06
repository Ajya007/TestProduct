/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //primary color defined
        'primary-black': "#000000",
        "primary-orange": "#F15A29",
        "primary-yellow-dark": "#FFD540",
        "primary-yellow-light": "#FFE58C",
        "primary-ligh-white": "#CCCCCC",
        "primary-grey-white": "#EBECF5",
        "primary-blue-shade": "#3C479D",
        //add secondary color if  needed
      }
    },
  },
  plugins: [],
}