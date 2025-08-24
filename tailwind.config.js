/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "volt-blue": "var(--volt-blue)",
        "volt-green": "var(--volt-green)",
      },
    },
  },
  plugins: [],
};
