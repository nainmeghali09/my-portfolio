module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        11: "repeat(11, 10vw)",
      },
      gridRowStart: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
      },
      colors: {
        'myorange': '#F26C4F',
        'blue1': '#0A0C18',
        'blue2': '#010413'
        
      },
    
      gridRowEnd: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
      },
    },
  },
  plugins: [],
};
