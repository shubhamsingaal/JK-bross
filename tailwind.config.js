/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4871FF"
      },
      fontFamily:{
        sans: ['sans-serif'],
        serif: ['serif'],
      }
    },
  },
  plugins: [],
}

