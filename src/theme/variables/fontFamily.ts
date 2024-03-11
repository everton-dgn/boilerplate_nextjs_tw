import { Poppins } from 'next/font/google'

const poppins = Poppins({
  variable: '--font-poppins',
  display: 'swap',
  subsets: ['latin', 'latin-ext'],
  weight: ['500', '600', '700']
})

export default poppins
