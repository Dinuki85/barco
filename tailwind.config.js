module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#001F54",
        lightBlue: "#0078D7",
        white: "#ffffff",
      },
      fontFamily: {
        calibri: ["Calibri", "sans-serif"],
        timesnewroman: ["Times New Roman", "serif"],
      }, // <-- add this closing brace
    },   // <-- and this one to close extend
  },
  plugins: [],
};