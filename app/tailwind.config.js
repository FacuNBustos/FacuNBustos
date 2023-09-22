/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bungee: ["Bungee Shade", "cursive"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
  darkMode: ["class", "[data-theme=dark]"],
};
