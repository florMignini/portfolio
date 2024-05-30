/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.tsx"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        text: "#6ee2f5",
        "text-hover": "#5bc3d3",
        background: "#000000",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/heroBg.jpeg')",
        "section-texture":"url('/src/assets/screenBg.jpg')",
      },
    },
  },
  plugins: [],
}