import type { Meta, StoryObj } from '@storybook/react'
import { Nav } from '~/components/nav'

const meta: Meta<typeof Nav> = {
  component: Nav,
  title: 'Nav'
}

export default meta

type Story = StoryObj<typeof Nav>

const args = {}

export const Basic: Story = {
  args
}
