import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Button } from '..'

const meta = {
  args: {
    label: 'Button',
    onClick: action('on-click')
  },
  component: Button,
  title: 'Atoms/Button'
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
