'use client'

import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import { fetchAllCategories } from '~/api/queries/product.query'

import { Combobox } from '~/components/combobox'
import { useSearchProducts } from '~/hooks/use-search-products'

export const FilterForm = () => {
  const searchParams = Object.fromEntries(useSearchParams().entries())

  const getCategories = useQuery(fetchAllCategories)
  const [category, setCategory] = useState(searchParams.category)
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

  return <Combobox data={categories} placeholder="Filter by category" value={String(category)} onChangeValue={onChangeCategory} />
}
