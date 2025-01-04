/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        color: {
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          terciary: "var(--color-terciary)",
          quaternary: "var(--color-quaternary)",
        },
        surface: {
          primary: "var(--surface-color-primary)",
          secondary: "var(--surface-color-secondary)",
          terciary: "var(--surface-color-terciary)",
          quaternary: "var(--surface-color-quaternary)",
          hover: "var(--surface-color-hover)",
        }
      }
    },
  },
  plugins: [],
}
