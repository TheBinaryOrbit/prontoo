/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'logocolor'  : '#fe4d38'
      },
      backgroundColor : {
        "logocolor"  : "#fe4d38"
      },
      fontFamily : {
        "playfair" : "Playfair Display",
        "roboto" : "Roboto"
      },
      boxShadow : {
        'play': 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        'mobile': 'rgba(0, 0, 0, 0.1) 0px 4px 12px'      
      },
      borderRadius : {
        curveround : '97% 3% 4% 3% / 20% 8% 9% 7%'
      },
      rotate : {
        "360" : "360deg"
      }
    },
  },
  plugins: [],
}