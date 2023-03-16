module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  //content: [],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
