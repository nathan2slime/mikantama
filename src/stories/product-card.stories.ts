import type { Meta, StoryObj } from '@storybook/react'

import { ProductCard } from '~/components/product-card'

const meta: Meta<typeof ProductCard> = {
  component: ProductCard,
  title: 'ProductCard'
}

export default meta

type Story = StoryObj<typeof ProductCard>

export const Basic: Story = {
  args: {
    id: 1,
    title: 'Hello World',
    description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 0,
      count: 0
    },
    price: 0
  }
}
