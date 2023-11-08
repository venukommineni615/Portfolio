/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        Roboto:["Roboto slab, serif"]
      },
      colors:{
        Teal:'#317773',
        Lavender:'#E2D1F9',
        RoyalBlue:'#00539CFF',
        Peach:'#EEA47FFF',
        ForestGreen:'#2C5F2D',
        MossGreen:'#97BC62FF',
      }
    },
  },
  plugins: [],
}

