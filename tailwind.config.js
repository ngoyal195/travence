module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          charcoal: "#0F1724",
          accent: "#FF6A2B",
          sand: "#C7A97E"
        }
      },
      borderRadius: {
        lg: '12px'
      }
    }
  },
  plugins: []
}
