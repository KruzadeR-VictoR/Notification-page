/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      jakartaSans: ["Plus Jakarta Sans", "sans-serif"],
    },    
    extend: {
      colors: {
        White: "hsl(0, 0%, 100%)",
        Red: "hsl(1, 90%, 64%)",
        Blue: "hsl(219, 85%, 26%)",
        verylgBlue: "hsl(210, 60%,98%)",
        lightGrayishBlue1: "hsl(211, 68%, 94%)",
        lightGrayishBlue2: "hsl(205, 33%, 90%)",
        grayishBlue: "hsl(219, 14%, 63%)",
        darkGrayishBlue: "hsl(219, 12%, 42%)",
        darkBlue: "hsl(224, 21%, 14%)",
      },
      fontWeight: {
        medium: "500",
        "extra-bold": "800",
      },
    },
  },
  plugins: [],
};
