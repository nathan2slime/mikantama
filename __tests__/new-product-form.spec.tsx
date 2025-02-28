import { useMutation, useQueryClient } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import { useSearchParams } from 'next/navigation'
import { NewProductForm } from '~/components/new-product-form'
import { Product } from '~/types/product.types'

describe('NewProductForm', () => {
  let mockUseSearchParams: jest.Mock
  let mockUseQueryClient: jest.Mock
  let mockUseMutation: jest.Mock

  const _product: Product = {
    category: 'category',
    description: 'description',
    id: 1,
    image: 'https://splash.com',
    price: 123,
    rating: {
      count: 23,
      rate: 3.4
    },
    title: 'product'
  }

  beforeEach(() => {
    mockUseSearchParams = useSearchParams as jest.Mock
    mockUseQueryClient = useQueryClient as jest.Mock
    mockUseMutation = useMutation as jest.Mock

    mockUseMutation.mockResolvedValue({ isPedding: false })
    mockUseQueryClient.mockReturnValue({ setQueryData: jest.fn() })
    mockUseSearchParams.mockReturnValue(new URLSearchParams(''))
  })

  it('should render', () => {
    render(<NewProductForm />)
    const fieldNameList = ['title', 'price', 'description', 'image', 'category']
    const fields = screen.getAllByTestId('field')

    expect(fields.length).toBe(fieldNameList.length)
    expect(fields.map(field => field.getAttribute('name'))).toMatchObject(fieldNameList)
  })
})
