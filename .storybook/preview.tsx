import type { Preview } from '@storybook/react'

import { MainProvider } from '../src/providers/mainProvider'
import poppins from '../src/theme/fontFamily'
import viewports from './viewports'

import '../src/theme/globals.css'
import './style.css'

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={poppins.className}>
        <MainProvider>
          <Story />
        </MainProvider>
      </div>
    )
  ],
  parameters: {
    backgrounds: {
      default: 'light'
    },
    viewport: {
      viewports
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    layout: 'centered'
  }
}

export default preview
