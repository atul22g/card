/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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
}

