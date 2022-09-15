/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./morder/**/*.{html,js}"],
  theme: {
    container:{
      color: true,
      padding: "1rem",
      screens:{
        lg:"1124px",
        xl:"1124px","2xl":"1124px",
      },
    },
    extend: {
      colors:{
        "orange":"#FFA91C",
        "red":"#FA5959",
        "blue":"#0c4a6e",
        "grey":"#6b7280",
        "white":"#f8fafc",
      },
    },
  },
  plugins: [],
}
