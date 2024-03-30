import type { Config } from 'tailwindcss'
import eleganceUIUtilities from 'eleganceui-tailwind-utilities'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: 'var(--font-poppins)'
    },
    extend: {}
  },
  plugins: [...eleganceUIUtilities]
}

export default config
