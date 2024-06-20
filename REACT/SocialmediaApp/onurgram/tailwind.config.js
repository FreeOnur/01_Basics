/** @type {import('tailwindcss').Config} */
let rotation = Math.round(Math.random() * 360 + 360)
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'poppins': ['poppins', 'sans-serif']
    },
    extend: {
      rotate: {
        'random': { transform: `rotate(${rotation})` },

      },
      animation: {
        rotate: 'rotate 7s linear forwards',
      },
    },
  },
  plugins: [],
}

