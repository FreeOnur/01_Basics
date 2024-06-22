/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      'poppins': ['poppins', 'sans-serif']
    },
    extend: {
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        rotate: 'rotate 7s linear infinite', 
      },
    },
  },
  plugins: [],
}