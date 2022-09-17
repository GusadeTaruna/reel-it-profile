/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../src/assets/bg-hero.jpg')",
        white_line: "url('../src/assets/bg-white.jpeg')",
      },
      fontFamily: {
        monument_regular: ["monument-regular", "sans-serif"],
        monument_bold: ["monument-bold", "sans-serif"],
        grotesk_mono: ["grotesk-mono", "sans-serif"],
        grotesk_reg: ["grotesk-reg", "sans-serif"],
      },
    },
  },
  plugins: [],
};
