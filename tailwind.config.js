/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  blocklist: [
    'collapse',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}