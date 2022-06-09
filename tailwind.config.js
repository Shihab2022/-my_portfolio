module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#FFB400",
          secondary: "#090306",
          accent: "#111111",
          neutral: "#FFFFFF",
          error: "#FA5C5C",
        },
      },
      // {
      //   dark: {
      //     primary: "#72B626",
      //     secondary: "#D3D3D3",
      //     accent: "#FFFFFF",
      //     neutral: "#F3F4F6",
      //     error: "#FB7185",
      //   },
      // },
    ],
  },
  plugins: [require("daisyui")],
}