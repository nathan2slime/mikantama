import { useQuery } from '@tanstack/react-query'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { useSearchParams } from 'next/navigation'

import { FilterForm } from '~/components/filter-form'
import { useSearchProducts } from '~/hooks/use-search-products'

describe('FilterForm', () => {
  const categories = ['category', 'product']

  let mockUseQuery: jest.Mock
  let mockUseSearchProducts: jest.Mock
  let mockUseSearchParams: jest.Mock

  beforeEach(() => {
    mockUseQuery = useQuery as jest.Mock
    mockUseSearchProducts = useSearchProducts as jest.Mock
    mockUseSearchParams = useSearchParams as jest.Mock

    mockUseSearchParams.mockReturnValue(new URLSearchParams(''))
    mockUseQuery.mockReturnValue({ data: categories })
    mockUseSearchProducts.mockReturnValue({ onSearch: jest.fn() })
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('renders the component correctly', () => {
    render(<FilterForm />)
    expect(screen.getByText('Filter by category')).toBeInTheDocument()
    expect(screen.getByLabelText('order-by-price')).toBeInTheDocument()
  })

  it('updates category filter when a new value is selected', async () => {
    const onSearchMock = jest.fn()
    mockUseSearchProducts.mockReturnValue({ onSearch: onSearchMock })

    render(<FilterForm />)

    const combobox = screen.getByLabelText('combobox')

    await waitFor(() => fireEvent.click(combobox))
    const item = screen.getByText('category')
    await waitFor(() => fireEvent.click(item))

    expect(onSearchMock).toHaveBeenCalledWith({ category: 'category' })
  })

  it('updates price sort filter when a new value is selected', () => {
    const onSearchMock = jest.fn()
    mockUseSearchProducts.mockReturnValue({ onSearch: onSearchMock })

    render(<FilterForm />)

    const priceSort = screen.getByLabelText('order-by-price')
    fireEvent.click(priceSort)
    fireEvent.click(screen.getByText('High Price'))

    expect(onSearchMock).toHaveBeenCalledWith({ price: 'asc' })
  })
})
