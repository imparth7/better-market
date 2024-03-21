/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('./assets/Background.png')",
        'logo': "url('./assets/logo.png')",
      },
      fontFamily: {
        gilroy: ['Gilroy']
      },
      borderRadius: {
        '4xl': '48px'
      },
      colors: {
        'main': 'rgb(249, 226, 186)'
      }
    },
  },
  plugins: [],
}

