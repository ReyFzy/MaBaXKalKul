/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "lobster-two": "Lobster Two",
        "rubik": "Rubik",
        "poppins": "Poppins",
      },
      colors: {
        "macaroni": "#FFC107",
        "macaroni-muted": "#FFD9DF",
      },
      backgroundImage: {
        "vector": "url('/svg/vector-bg-1.svg')",
      },
    },
  },
  plugins: [],
}