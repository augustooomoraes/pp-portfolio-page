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
          normalDark: "var(--link-normal-dark)",
          visitedDark: "var(--link-visited-dark)",
          hoverDark: "var(--link-hover-dark)",
          activeDark: "var(--link-active-dark)",
        },
      },
      maxWidth: {
        content: "var(--content-max-width)",
      },
      fontSize: {
        "1.2xl": "1.3125rem",
        "1.5xl": "1.375rem",
        "2.2xl": "1.625rem",
        "2.5xl": "1.75rem",
        "3.5xl": "2.125rem",
        "4.5xl": "2.5rem",
      },
      margin: {
        "4.5": "1.125rem",
      },
      padding: {
        "4.5": "1.125rem",
      },
      gap: {
        "4.5": "1.125rem",
      },
      lineHeight: {
        paragraph: "150%",
        listItem: "130%",
        "7.5": "1.875rem",
      },
      letterSpacing: {
        notThatWide: "0.0135em",
      },
      objectPosition: {
        "7.5": "1.875rem",
      },
      borderRadius: {
        almostMedium: "0.25rem"
      },
      height: {
        "0.75": "0.1875rem",
      }
    },
  },
  plugins: [],
} satisfies Config;
