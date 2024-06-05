/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          roboto: ["Roboto", "sans-serif"],
        },
        colors: {
          'cloudWhite': '#f6f5f3',
          'cloudGray': '#ebebeb',
  
          'darkBlueMountain': '#4d6c98',
          'lightBlueMountain': '#7a8bb7',
          
          'darkGrayMountain': '#2b3a57',
          'mediumGrayMountain': '#4b5360',
          'lightGrayMountain': '#6b6c6e',
  
          'darkBrownMountain': '#714c32',
          'lightBrownMountain': '#cea07c',
        },
      },
    },
    plugins: [],
  }