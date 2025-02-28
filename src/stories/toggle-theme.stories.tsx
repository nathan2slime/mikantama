import type { Meta, StoryObj } from '@storybook/react'
import { ModeToggle } from '~/components/toggle-theme'

const meta: Meta<typeof ModeToggle> = {
  component: ModeToggle,
  title: 'ToggleTheme'
}

export default meta

type Story = StoryObj<typeof ModeToggle>

const args = {}

export const Basic: Story = {
  args
}
