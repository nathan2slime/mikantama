import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '~/components/ui/button'

const meta: Meta<typeof Button> = {
  component: Button
}
export default meta

type Story = StoryObj<typeof Button>

export const Basic: Story = {
  args: {
    children: 'Hello'
  }
}

export const Primary: Story = {
  args: {
    children: 'Hello'
  }
}
