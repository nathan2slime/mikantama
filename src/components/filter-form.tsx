'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'

import { fetchAllCategories } from '~/api/queries/product.query'

import { Combobox } from '~/components/combobox'

export const FilterForm = () => {
  const category = useSearchParams().get('category')
  const router = useRouter()

  const getCategories = useSuspenseQuery(fetchAllCategories)

  const onChangeCategory = (newCategory: string) => {
    const searchParams = new URLSearchParams({ category: newCategory })

    router.push(`?${searchParams}`)
  }

  const categories = (getCategories.data || []).map(category => ({ label: category, value: category }))

  return <Combobox data={categories} placeholder="Filter by category" value={String(category)} onChangeValue={onChangeCategory} />
}
