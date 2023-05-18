/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: { 
    colors: {
    transparent: 'transparent',
    bgbutton: '#060047',
    colorbutton: '#ffffff',
    dctry1: '#B3005E',
    dctry2: '#E90064',
    dctry3: '#FF5F9E',
  },
    extend: {},
  },
  plugins: [require('preline/plugin'),],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
};

