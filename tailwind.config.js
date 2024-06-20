/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans'],
        lato: ['Lato', 'sans'],
        roboto: ['Roboto', 'sans'],
        sanchez: ['Sanchez', 'serif'],
      },
    },
  },
  plugins: [],
}

