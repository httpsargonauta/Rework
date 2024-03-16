/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#39B7B5',
        'secondary': '#E9521D',
        'tertiary': '#192E4D',
        'background': '#EDF4F4',
        'card': '#192E4D',
        'card-text': '#DBDBDB',
      }
    },
  },
  plugins: [],
}