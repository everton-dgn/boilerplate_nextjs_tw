import type { Config } from 'tailwindcss'
import * as customUtilities from 'eleganceui-tailwind-utilities'

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
  plugins: [...Object.values(customUtilities)]
}

export default config
