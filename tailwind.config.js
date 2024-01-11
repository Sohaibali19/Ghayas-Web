/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html", "./src/input.js"],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {

      }
    },
  },
  plugins: [],
}




// shadow-[.4rem_.4rem_1rem_#333,-.4rem_-.4rem_1rem_#ccc] hover:shadow-inner[.4rem_.4rem_1rem_#333,-.4rem_-.4rem_1rem_#ccc]
