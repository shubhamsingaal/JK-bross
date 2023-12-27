/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4871FF",
        "primary-400": "#3c76d8",
        "primary-300": "#5591e4",
        "primary-200": "#77a9f0",
        "primary-100": "#a1c2fb",  // Lighter shade
        "primary-50": "#F0F8FF",  // Lighter shade
        "textPrimary": "#262262",
        "outline": "#DBE3FF"
      },
      fontFamily:{
        sans: ['sans-serif'],
        serif: ['serif'],
      }
    },
  },
  plugins: [],
}

