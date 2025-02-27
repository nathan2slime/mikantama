'use client'

import { useQuery } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

import { fetchAllCategories } from '~/api/queries/product.query'

import { Combobox } from '~/components/combobox'

export const FilterForm = () => {
  const searchParams = Object.fromEntries(useSearchParams().entries())

  const [category, setCategory] = useState(searchParams.category || 'all')
  const router = useRouter()

  const getCategories = useQuery(fetchAllCategories)

  const onSearch = (args: Record<string, string>) => {
    const searchParams = new URLSearchParams({ ...args })

    router.push(`?${searchParams}`)
  }

  const categories = [
    {
      label: 'all',
      value: 'all'
    },
    ...(getCategories.data || []).map(category => ({ label: category, value: category }))
  ]

  const onChangeCategory = (newCategory: string) => {
    setCategory(newCategory)

    onSearch({ category: newCategory === 'all' ? '' : newCategory })
  }

  return <Combobox data={categories} placeholder="Filter by category" value={String(category)} onChangeValue={onChangeCategory} />
}
