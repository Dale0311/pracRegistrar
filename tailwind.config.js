/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        manage: "#F3603C",
        manage2: "#242D52"
      }
    },
    fontFamily: {
      poppins: "font-family: 'Poppins', sans-serif;"
    }
  },
  plugins: [],
}
