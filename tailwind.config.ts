import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			color: {
  				primary: 'rgba(var(--color-primary-rgb))',
  				secondary: 'rgba(var(--color-secondary-rgb))',
  				terciary: 'rgba(var(--color-terciary-rgb))',
  				quaternary: 'rgba(var(--color-quaternary-rgb))'
  			},
  			surface: {
  				primary: 'rgba(var(--surface-color-primary-rgb))',
  				secondary: 'rgba(var(--surface-color-secondary-rgb))',
  				terciary: 'rgba(var(--surface-color-terciary-rgb))',
  				quaternary: 'rgba(var(--surface-color-quaternary-rgb))',
  				hover: 'var(--surface-color-hover)',
  				primaryDark: 'rgba(var(--surface-color-primary-rgb-dark))',
  				secondaryDark: 'rgba(var(--surface-color-secondary-rgb-dark))',
  				terciaryDark: 'rgba(var(--surface-color-terciary-rgb-dark))',
  				quaternaryDark: 'rgba(var(--surface-color-quaternary-rgb-dark))',
  				hoverDark: 'var(--surface-color-hover-dark)'
  			},
  			text: {
  				primary: 'var(--font-color-primary)',
  				secondary: 'var(--font-color-secondary)',
  				primaryDark: 'var(--font-color-primary-dark)',
  				secondaryDark: 'var(--font-color-secondary-dark)'
  			},
  			link: {
  				normal: 'var(--link-normal)',
  				visited: 'var(--link-visited)',
  				hover: 'var(--link-hover)',
  				active: 'var(--link-active)',
  				normalDark: 'var(--link-normal-dark)',
  				visitedDark: 'var(--link-visited-dark)',
  				hoverDark: 'var(--link-hover-dark)',
  				activeDark: 'var(--link-active-dark)'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		maxWidth: {
  			content: 'var(--content-max-width)'
  		},
  		fontSize: {
  			'1.2xl': '1.3125rem',
  			'1.5xl': '1.375rem',
  			'2.2xl': '1.625rem',
  			'2.5xl': '1.75rem',
  			'3.5xl': '2.125rem',
  			'4.5xl': '2.5rem'
  		},
  		margin: {
  			'4.5': '1.125rem'
  		},
  		padding: {
  			'4.5': '1.125rem'
  		},
  		gap: {
  			'4.5': '1.125rem'
  		},
  		lineHeight: {
  			paragraph: '150%',
  			listItem: '130%',
  			'7.5': '1.875rem'
  		},
  		letterSpacing: {
  			notThatWide: '0.0135em'
  		},
  		objectPosition: {
  			'7.5': '1.875rem'
  		},
  		borderRadius: {
  			almostMedium: '0.25rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		height: {
  			'0.75': '0.1875rem'
  		}
  	}
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
