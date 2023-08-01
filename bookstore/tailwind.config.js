/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,tsx}', './components/**/*.{html,tsx}',],
  theme: {
    extend: {
      fontSize: {
        '14': '14px',
        '16': '16px'
      },
      width: {
        '187': '187px',
      },
      height: {
        '187': '187px',
      },
      colors: {
        customRed: '#FF003E',
      }
    },
  },
  plugins: [],
}

