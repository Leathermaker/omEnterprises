/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["PlusJakartaSans-Bold", "sans-serif"],
      },
      colors: {
        OMblue: "#9b59b6",
        OMblue2: "#c58adb",
        OMlightBlue: "#E5EBFA",
      },
      screens: {
        "3xl": "1970px",
      },
      maxWidth: {
        "screen-3xl": "2560px",
      },
    },
  },
  plugins: [require("tailwindcss-motion"), require("tailwindcss-animate")],
};
