/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    extend: {
      colors: {
        primaryBg: 'var(--primary-background)',
        secondaryBg: 'var(--secondary-background)',
        primaryColor: 'var(--primary-color)',
        secondaryColor: 'var(--secondary-color)',
        accent: 'var(--accent)',
        text: 'var(--text)',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        xxl: '1440px',
      },
      fontFamily: {
        text: ['Poppins', 'sans-serif'],
        title: ['Chakra Petch', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
