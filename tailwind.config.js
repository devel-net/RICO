module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        screens: {
            'phone': '360px',
        },
        margin: {
            '5px': '5px',
        },
        colors: {
            'dark-blue': '#151B43',
            'light-blue': '#36418E',
            'primary': '#FFF',
            'primary-shutted':'rgba(255, 255, 255, 0.8)',
            'green': '#2DCA84',
            'orange': '#FF9331',
            'dark-blue-2': '#091024',
            'primary-link': '#0088D1',
        },
        fontFamily: {
            'sans': ['Comfort'],
        }
    },
  },
  plugins: [],
}
