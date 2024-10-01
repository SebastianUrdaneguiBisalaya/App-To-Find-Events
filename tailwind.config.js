/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        ["primary-color"]: "#761CBC",
        ["secondary-color"]: "#0DCDAA",
      },
    },
  },
  plugins: [],
};
