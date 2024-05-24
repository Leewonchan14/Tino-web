// tailwind.config.js 📂

module.exports = {
  // 템플릿 파일의 경로 설정 👀
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: { max: "819px" },
      md: { min: "820px", max: "1023px" },
      lg: { min: "1080px" },
    },
  },
  plugins: [],
}