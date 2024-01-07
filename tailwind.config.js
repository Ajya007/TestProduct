/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    zIndex: {
      '1': '1',
      '2': '2',
      '3': '3',
      "4": '4',
    },
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
      borderRadius: {
        '32': '2rem',
      },
      spacing: {
        '266': "16.625rem",
        '347': "21.6875rem",
        '232': "14.5rem",
        '143': "8.9375rem",
        '167': '10.4375rem',
        '151': '9.4375rem',
        '56': '3.4375re,'
      },
      colors: {
        //primary color defined
        'primary-black': "#000000",
        "primary-orange": "#F15A29",
        "primary-yellow-dark": "#FFD540",
        "primary-yellow-light": "#FFE58C",
        "primary-ligh-white": "#CCCCCC",
        "primary-grey-white": "#EBECF5",
        "primary-blue-shade": "#3C479D",
        "primary-background": "F7F7F7"
        //add secondary color if  needed
      }
    },
  },
  plugins: [],
}