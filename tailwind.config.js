/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#155527F5",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        gradient: "linear-gradient(164.42deg, #155527 27.54%, #000000 94.03%)",
      },
    },
  },
  plugins: [],
};
