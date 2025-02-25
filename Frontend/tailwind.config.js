/** @type {import('tailwindcss').Config} */
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");



export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'logocolor'  : '#fe4c38d6'
      },
      backgroundColor : {
        "logocolor"  : "#fe4c38d6"
      },
      fontFamily : {
        'lora' : "Alegreya"
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
      },
      backgroundImage: {
        'back': "url(/src/assets/background.jpeg)"
      },
    },
  },
  plugins: [
    addVariablesForColors
  ],
}


// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}