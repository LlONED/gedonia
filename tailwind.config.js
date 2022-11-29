/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      defaultBackground: "#001418",
      defaultYellow: "#ecd035",
    },
  },
  plugins: [],
};
