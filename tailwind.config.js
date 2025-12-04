/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'yad': ['BuNotza', 'Rubik', 'Arial', 'sans-serif'],
        'frank': ['NotoSans', 'Assistant', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
