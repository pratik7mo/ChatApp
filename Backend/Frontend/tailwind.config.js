module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust paths based on your project structure
    "./public/index.html",             // Include other paths if necessary
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
};
