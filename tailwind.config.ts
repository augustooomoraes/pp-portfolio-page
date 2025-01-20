import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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

          primaryDark: "var(--surface-color-primary-dark)",
          secondaryDark: "var(--surface-color-secondary-dark)",
          terciaryDark: "var(--surface-color-terciary-dark)",
          quaternaryDark: "var(--surface-color-quaternary-dark)",
          hoverDark: "var(--surface-color-hover-dark)",
        },
        text: {
          primary: "var(--font-color-primary)",
          secondary: "var(--font-color-secondary)",
          primaryDark: "var(--font-color-primary-dark)",
          secondaryDark: "var(--font-color-secondary-dark)",
        },
        link: {
          normal: "var(--link-normal)",
          visited: "var(--link-visited)",
          hover: "var(--link-hover)",
          active: "var(--link-active)",
        },
      },
      maxWidth: {
        content: "var(--content-max-width)",
      },
      fontSize: {
        header1: "var(--header1-size)",
        header2: "var(--header2-size)",
        header3: "var(--header3-size)",
        header4: "var(--header4-size)",
        paragraph: "var(--paragraph-size)",
        listItem: "var(--list-item-size)",
      },
      margin: {
        header1: "var(--header1-spacing)",
        header2: "var(--header2-spacing)",
        header3: "var(--header3-spacing)",
        header4: "var(--header4-spacing)",
        paragraph: "var(--paragraph-spacing)",
      },
      lineHeight: {
        paragraph: "var(--paragraph-line-height)",
        listItem: "var(--list-item-line-height)",
      },
      transitionDuration: {
        longer: "var(--transition-duration)",
      },
    },
  },
  plugins: [],
} satisfies Config;
