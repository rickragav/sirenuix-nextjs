const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // // Light colors
        // 'primary-light': '#F7F8FC',
        // 'secondary-light': '#FFFFFF',
        // 'ternary-light': '#f6f7f8',

        // // Dark colors
        // 'primary-dark': '#0D2438',
        // 'secondary-dark': '#102D44',
        // 'ternary-dark': '#1E3851',

        // Light colors
        "primary-light": "#F7F8FC",
        "secondary-light": "#FFFFFF",
        "ternary-light": "#f6f7f8",

        // Dark colors
        "primary-dark": "#0f0f0f",
        "secondary-dark": "#e5e5e50f",
        "ternary-dark": "#1A1A1A",
		"ternary-orange":"#F6743C",

        // Extended v3 color
        gray: colors.neutral,
      },
      fontFamily: {
        poppins: ["Poppins", "system-ui", "sans-serif"],
		neue: ["Helvetica Neue", "system-ui", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
