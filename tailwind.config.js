/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik-Regular", "sans-serif"],
        rubik_bold: ["Rubik-Bold", "sans-serif"],
        rubik_extrabold: ["Rubik-ExtraBold", "sans-serif"],
        rubik_medium: ["Rubik-Medium", "sans-serif"],
        rubik_semibold: ["Rubik-SemiBold", "sans-serif"],
        rubik_light: ["Rubik-Light", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#0061FF0A",
          200: "#0061FF1A",
          300: "#0061FF2A",
          400: "#0061FFA6",
        },
        accent: {
          100: "#FBFBFD",
        },
        black: {
          DEFAULT: "#000000",
          100: "#8C8E98",
          200: "#666876",
          300: "#191d31",
        },
        danger: "#F75555",
      },
    },
    plugins: [],
  },
};
