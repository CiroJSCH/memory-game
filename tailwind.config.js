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
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
        'silver-gradient': 'linear-gradient(to right, #AFAFAF, #F2F2F2, #A0A0A0, #F1F1F1, #8F8F8F)',
        'bronze-gradient': 'linear-gradient(to right, #A77044, #F9D9B4, #A77044, #F9D9B4, #A77044)',
      },
    },
  },
  plugins: [],
};
