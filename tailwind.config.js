import { themes, breakpoints } from "./src/config";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: breakpoints,
      keyframes: {
        twirl: {
          "0%": { transform: "scale(0) rotate(-150deg)", opacity: "0" },
          "100%": { transform: "scale(1) rotate(0)", opacity: "1" },
        },
        float: {
          "0%": { transform: "translate(0px)" },
          "50%": { transform: "translateY(4px)" },
          "100%": { transform: "translate(0px)" },
        },
      },
      animation: {
        float: "float 2s ease-in-out infinite",
        twirl: "twirl 200ms ease-in-out",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes,
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root",
  },
};
