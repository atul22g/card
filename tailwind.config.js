/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [   
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'card': '0 5px 15px 0 rgba(49,49,93,.13), 0 15px 35px 0 rgba(49,49,93,.1)',
        'details': '0 2px 6px rgba(0,0,0,.15), 0 1px 3px rgba(0,0,0,.1)',
      }
    }
  },
  plugins: [],
});
