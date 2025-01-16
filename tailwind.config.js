/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    

    extend: {
      backgroundImage: {
        'banner': "url('./src/assets/images/mainimg.png')",
        'leatherBanner': "url('./src/assets/images/leatheriamge2.png')",
      },
      fontFamily: {
        jakarta: [ 'PlusJakartaSans-Bold', "sans-serif"],
       
      },
      colors: {
        OMblue : "#684df4",
        OMlightBlue : "#E5EBFA"
      },
      screens: {
        '3xl': '1970px', 
      },
      maxWidth: {
        'screen-3xl': '2560px', // Add a custom max-width for the container
      },
    },
  },
  plugins: [
    require('tailwindcss-motion')], 
}