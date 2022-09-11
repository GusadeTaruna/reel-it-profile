/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../src/assets/bg-hero.jpg')",
      },
      fontFamily: {
        monument_regular: ["monument-regular", "sans-serif"],
        monument_bold: ["monument-bold", "sans-serif"],
        grotesk_mono: ["grotesk-mono", "sans-serif"],
      },
    },
  },
  plugins: [],
};
