import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {     
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'light-slate-blue': 'hsl(252, 100%, 67%)',
        'light-royal-blue': 'hsl(241, 81%, 54%)',
        'light-lavender': 'hsl(241, 100%, 89%)',
        'dark-gray-blue': 'hsl(224, 30%, 27%)',
        'persian-blue': 'hsla(241, 72%, 46%, 0)',
        'violet-blue': 'hsla(256, 72%, 46%, 1)',
        'light-red': 'hsl(0, 100%, 67%)',
        'orangey-yellow' : 'hsl(39, 100%, 56%)',
        'green-teal' : 'hsl(166, 100%, 37%)',
        'cobalt-blue' : 'hsl(234, 85%, 45%)',
        'pale-blue' : 'hsl(221, 100%, 96%)'
      },
      fontFamily: {
        sans:['var(--font-inter)'],
      }
    },    
  },
  plugins: [],
}
export default config
