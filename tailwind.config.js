/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SF Pro Display"', 'system-ui', 'sans-serif'],
      },
      colors: {
        'apple-gray': '#f5f5f7',
        'apple-blue': '#0071e3',
      }
    },
  },
  plugins: [],
}
