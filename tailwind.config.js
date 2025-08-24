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
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        soft: "0 8px 30px -10px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
