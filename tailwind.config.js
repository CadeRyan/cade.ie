/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0b151e',
        'dark-blue-2': '#3a506b',
        'teal': '#6fffe9',
        'light-teal': '#6fffe9',
        'orange': '#ef8354',
        'pastel-orange': '#FFB347', // Added pastel orange
      },
      blur: {
        xxs: '1px',
        xs: '2px',
      },
      screens: { // Added custom screen size
        'wide': '1440px',
      },
    },
  },
  plugins: [require('tailwindcss-motion')],
}
