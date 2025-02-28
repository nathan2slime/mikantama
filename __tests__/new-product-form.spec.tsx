import { useMutation, useQueryClient } from '@tanstack/react-query'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { useSearchParams } from 'next/navigation'
import { NewProductForm } from '~/components/new-product-form'
import { Product } from '~/types/product.types'

describe('NewProductForm', () => {
  let mockUseSearchParams: jest.Mock
  let mockUseQueryClient: jest.Mock
  let mockUseMutation: jest.Mock

  const product: Product = {
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

    mockUseMutation.mockResolvedValue({ isPedding: false, onSuccess: jest.fn() })
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

  it('must update product list with new product', async () => {
    const mutate = jest.fn().mockImplementation(() => onSuccess())
    const setQueryData = jest.fn()
    const onSuccess = jest.fn().mockImplementation(() => {
      setQueryData()
    })

    mockUseMutation.mockReturnValue({ mutate })
    mockUseQueryClient.mockReturnValue({ setQueryData })

    render(<NewProductForm />)

    const fields = screen.getAllByTestId('field')
    const form = screen.getByTestId('form')

    fields.forEach(field => {
      const name = field.getAttribute('name') as keyof Product
      fireEvent.change(field, { target: { value: product[name].toString() } })
    })

    fireEvent.submit(form)

    await waitFor(() => {
      expect(mutate).toHaveBeenCalled()
      expect(setQueryData).toHaveBeenCalled()
      expect(onSuccess).toHaveBeenCalled()
    })
  })
})
