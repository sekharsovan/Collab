module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000',
        secondary: '#fff',
        accent: '#4F46E5', // Example accent color
      },
      spacing: {
        '128': '32rem', // Example custom spacing
      },
    },
  },
  plugins: [],
};