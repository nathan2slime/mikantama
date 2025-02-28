'use client'

import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import { fetchAllCategories } from '~/api/queries/product.query'

import { Combobox } from '~/components/combobox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select'
import { useSearchProducts } from '~/hooks/use-search-products'

export const FilterForm = () => {
  const searchParams = Object.fromEntries(useSearchParams().entries())

  const getCategories = useQuery(fetchAllCategories)
  const [category, setCategory] = useState(searchParams.category)
  const [priceSort, setPriceSort] = useState(searchParams.price)
  const { onSearch } = useSearchProducts(searchParams)

  const categories = [
    {
      label: 'all',
      value: ''
    },
    ...(getCategories.data || []).map(category => ({ label: category, value: category }))
  ]

  const onChangeCategory = (newCategory: string) => {
    setCategory(newCategory)

    onSearch({ category: newCategory })
  }

  const onChangePriceSort = (newPriceSort: string) => {
    setPriceSort(newPriceSort)
    onSearch({ price: newPriceSort })
  }

  return (
    <div className="flex justify-start gap-1">
      <Combobox data={categories} placeholder="Filter by category" value={String(category)} onChangeValue={onChangeCategory} />

      <Select value={priceSort} onValueChange={onChangePriceSort}>
        <SelectTrigger className="w-[180px]">
          <SelectValue aria-label="order-by-price" placeholder="Sort by price" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="featured">Featured</SelectItem>
          <SelectItem value="asc">High Price</SelectItem>
          <SelectItem value="desc">Low Price</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
