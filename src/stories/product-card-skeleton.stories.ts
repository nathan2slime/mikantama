import type { Meta, StoryObj } from '@storybook/react'

import { ProductCardSkeleton } from '~/components/product-card-skeleton'

const meta: Meta<typeof ProductCardSkeleton> = {
  component: ProductCardSkeleton,
  title: 'ProductCardSkeleton'
}

export default meta

type Story = StoryObj<typeof ProductCardSkeleton>

const args = {}

export const Basic: Story = {
  args
}
