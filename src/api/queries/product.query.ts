import { queryOptions } from '@tanstack/react-query'

import { api } from '~/api'
import { Product } from '~/types/product.types'

export const fetchAllProducts = queryOptions({
  queryKey: ['products'],
  queryFn: async () => {
    const { data } = await api.get<Product[]>('products')

    return data
  }
})
export const fetchAllCategories = queryOptions({
  queryKey: ['all-categories'],
  queryFn: async () => {
    const { data } = await api.get<string[]>('products/categories')

    return data
  }
})
