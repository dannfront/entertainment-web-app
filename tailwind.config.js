/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "red":"#FC4747",
        "dark-blue":"#10141E",
        "greyish-blue":"#5A698F",
        "semi-dark-blue":"#161D2F",
        "pure-white":"#ffffff"
      }
    },
  },
  plugins: [],
}