const { PRIMARY } = require("./src/constants/Color");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          600: `${PRIMARY}`,
          100: "#E0E7FFFF",
        },
      },
      screens: {
        mobile: { min: "240px", max: "640px" },
        pc: { min: "1280px" },
        sm: { min: "641px", max: "819px" },
        md: { min: "820px", max: "1023px" },
        lg: { min: "1080px" },
      },
      spacing: {
        "my-page-max-width": "764px",
        "home-max-width": "1080px",
      },
      fontFamily: {
        G_MARKET: "GmarketSans",
      },
    },
  },
  plugins: [],
};
