/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      width: {
        sidebar: "30%", // Default width for larger screens
        // "sidebar-sm": "100px", // Width for small screens (adjust as needed)
      },

      colors: {
        "sidebar-bg": "#333", // Background color for the sidebar
        primary: {
          100: "#F5F5F5",
          200: "#ECECEC",
          300: "#C8C8C8",
          400: "#919191",
          500: "#484848",
          600: "#3D3435",
          700: "#332426",
          800: "#29161B",
          900: "#220D15",
        },
        secondary: {
          100: "#FEECE5",
          200: "#FED6CC",
          300: "#FCBAB2",
          400: "#FA9F9F",
          500: "#F77F89",
          600: "#D45C71",
          700: "#B1405E",
          800: "#8F284D",
          900: "#761842",
        },
      },
    },
  },
  plugins: [],
};
