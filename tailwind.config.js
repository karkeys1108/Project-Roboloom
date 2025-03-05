module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        robotoFlex: ["Roboto Flex", "sans-serif"],
      },
      colors: {
        "bg-gradient-start": "#EDE8F5",
        "bg-gradient-end": "#ADBBDA",
        "bg-color-button": "#374269",
        "font-color-b":"#EDE8F5",
        "font-color":"#374269",
        "hover-color":"#ADBBDA"
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to bottom, #EDE8F5, #ADBBDA)",
        "gradient-glow":
          "radial-gradient(circle at top, rgba(255,255,255,0.8), transparent), linear-gradient(to bottom, #EDE8F5, #ADBBDA)",
      },
    },
  },
  plugins: [],
};

