/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-bg': '#F9F5F6',
        'header-bg':'#FDCEDF', 
        'leftpanel-bg':'#F8E8EE'
      }
    },
  },
  plugins: [],
}