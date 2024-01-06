/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.953rem',
      '4xl': '2.5rem',
      '5xl': '3.052rem',
    },
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