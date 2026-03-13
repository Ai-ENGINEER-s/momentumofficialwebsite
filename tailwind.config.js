/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        momentum: {
          blue: "#133D58",
          red: "#811625",
          gray: "#5f6368",
          light: "#FFFFFFFF",
        },
      },
    },
  },
  plugins: [],
}