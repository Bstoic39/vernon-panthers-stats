/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        panthersNavy: "#0B1E3A",
        panthersRed: "#D11F2F"
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
