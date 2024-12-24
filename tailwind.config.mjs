/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container: {
		padding: {
		  DEFAULT: '1rem',
		  sm: '2rem',
		  lg: '2rem',
		  
		},
	},
	fontSize:{
		heading:'24px',
		pageTitle:'30px',
		lg:"24px",
		md:"20px",
		sm:"14px"
	},
	fontWeight: {
		thin: '100',
		hairline: '100',
		extralight: '200',
		light: '300',
		normal: '400',
		bold:'600',
		extrabold:'700',
	 
	  },
  	extend: {
  		colors: {
  			custom: {
  				leafGreen: '#265E54',
				navHover: '#317266',
  				yellow: '#E4C46B',
				gray: '#848282',
				darkGreen: '#1877F2',
				lightGray:'#E2E2E2',
				darkGray:'#848282',
				error:"#E40000"
  			},
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
