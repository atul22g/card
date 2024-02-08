/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 5px 15px 0 rgba(49,49,93,.13), 0 15px 35px 0 rgba(49,49,93,.1)',
      }
    }
  },
  plugins: [],
}

