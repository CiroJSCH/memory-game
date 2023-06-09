/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts}', './index.html'],
  theme: {
    extend: {
      colors: {
        primaryColor: 'var(--primary-color)',
        secondaryColor: 'var(--secondary-color)',
        accent: 'var(--accent)',
        text: 'var(--text)',
        primaryBg: 'var(--primary-bg)',
        secondaryBg: 'var(--secondary-bg)',
      },
      screens: {
        xs: '340px',
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
