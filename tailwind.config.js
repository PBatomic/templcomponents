/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./web/**/*.{html,js,templ}"],
  theme: {
    fontFamily: {
      navbarF: ["Lato"],
      contentF: ["Assistant"],
    },
    container: {
      center: true,
    },
    extend: {
      transitionProperty: {
        width: "width",
      },
      backgroundImage: {
          "dash-backdrop": "url('/static/img/bg/bg.jpeg')",
      },
    },
  },
  plugins: [],
  safelist: ["bg-green-300", "bg-emerald-700", "bg-red-700"],
};
