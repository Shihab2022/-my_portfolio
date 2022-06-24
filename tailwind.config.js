module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#FFB400",
          secondary: "#090306",
          accent: "#111111",
          neutral: "#FFFFFF",
          info: "#252525",
          error: "#FA5C5C",
        },
      },
      {
        light: {
          primary: "#72B626",
          secondary: "#D3D3D3",
          // accent: "#404040",
          accent: "#1c4662",
          neutral: "#FFFFFF",
          info: "#252525",
          error: "#FB7185",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}