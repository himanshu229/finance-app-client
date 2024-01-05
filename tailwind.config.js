/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#12232E",
        lighterBlue: "#007CC7",
        lightestBlue: "#4DA8DA",
        whitestBlue: "#acabca",
        shadowDarkBlue: "#203647",
        shadowLightBlue: "#203647",
        blackish: "#202020",
      },
    },
  },
  plugins: [],
};
