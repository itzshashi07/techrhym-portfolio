module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class', // Enable dark mode via class strategy
  theme: {
    extend: {
      colors: {
        brand: '#FFAF45',
        lightBg: '#ffffff',
        darkBg: '#151f20',
        lightText: '#000000',
        darkText: '#ffffff',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
