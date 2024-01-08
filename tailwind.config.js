/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    zIndex: {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      10: '10',
      50: '50',
      99: '99',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.953rem',
      18: '1.125rem',
      32: '2rem',
      '4xl': '2.5rem',
      '5xl': '3.052rem',
    },
    extend: {
      borderRadius: {
        32: '2rem',
        40: '2.5rem',
      },
      spacing: {
        '1p': '0.0625rem',
        '6p': '0.375rem',
        56: '3.4375rem',
        143: '8.9375rem',
        151: '9.4375rem',
        167: '10.4375rem',
        232: '14.5rem',
        262: '16.375rem',
        266: '16.625rem',
        347: '21.6875rem',
        465: '29.0625rem',
      },
      colors: {
        //primary color defined
        'primary-black': '#000000',
        'primary-orange': '#F15A29',
        'primary-yellow-dark': '#FFD540',
        'primary-yellow-light': '#FFE58C',
        'primary-ligh-white': '#CCCCCC',
        'primary-grey-white': '#EBECF5',
        'primary-blue-shade': '#3C479D',
        'primary-background': 'F7F7F7',
        //add secondary color if  needed
      },
    },
  },
  plugins: [],
}
