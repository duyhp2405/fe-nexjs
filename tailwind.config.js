const { join } = require("path");

module.exports = {
  purge: [join(__dirname, "pages/**/*.{js,ts,jsx,tsx}"), join(__dirname, "src/**/*.{js,ts,jsx,tsx}")],
  theme: {
    extend: {
      colors: {
        "black-lead": "#212121",
        "mythical-wine": "#820813",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
