/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#f1a706',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
        dark: '#111111',
      },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '3rem',
      },
    },
  },
  plugins: [],
};
