const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'default': '#2D2C3B',
      },
      fontFamily: {
        clinton: ['Semibold', 'sans-serif'],
        clintonb: ['Bold', 'sans-serif'],
        rigth: ['Righteous', 'sans-serif'],
      },
    },
  },
  plugins: [],
});
