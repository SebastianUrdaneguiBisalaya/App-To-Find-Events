/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      screens: {
        xs: "300px",
      },
      colors: {
        primary: "#761CBC",
      },
    },
  },
  plugins: [],
};
