import { render } from '@testing-library/react'
import { ComponentProps } from 'react'

import '@testing-library/jest-dom'

import { ProductCard } from '~/components/product-card'

describe('ProductCard', () => {
  it('render', () => {
    const props: ComponentProps<typeof ProductCard> = {
      id: 1,
      title: 'Gaming Laptop',
      description: 'High-performance laptop for gaming and development.',
      category: 'Electronics',
      image: 'https://example.com/images/gaming-laptop.jpg',
      rating: {
        rate: 4.5,
        count: 120
      },
      price: 1499.99
    }
    const { container } = render(<ProductCard {...props} />)

    const title = container.getElementsByTagName('h3')

    expect(title.length).toBe(1)
    expect(title[0]).toHaveTextContent(props.title)
  })
})
