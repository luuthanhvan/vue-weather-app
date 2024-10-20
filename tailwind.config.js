/** @type { import('tailwindcss').Config } */
export default {
  content: ["./index.html", "./src/**/*.{vue, js, ts, jsx, tsx}"],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#090E17",
        "weather-secondary": "#1A2942",
        "weather-ternary": "#525D75",
        "white": "#EFEFF0",
        "weather-border": "#090E17",
        "weather-active": "#526FC9",
        "weather-line": "#6EA8AF"
      }
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    }
  },
  plugins: [],
};
