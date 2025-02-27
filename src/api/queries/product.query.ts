import { queryOptions } from '@tanstack/react-query'

import { api } from '~/api'
import { QueryParamsProductSchema } from '~/lib/schemas/product.schema'
import { Product } from '~/types/product.types'

export const fetchAllProducts = (args: Partial<QueryParamsProductSchema>) =>
  queryOptions({
    queryKey: ['products', args.limit],
    queryFn: async () => {
      const { data } = await api.get<Product[]>('products', {
        params: {
          limit: args.limit || 10
        }
      })

      return data
    }
  })

export const filterProducts = (args: Partial<QueryParamsProductSchema>) =>
  queryOptions({
    queryKey: ['filter-products', args.category],
    queryFn: async () => {
      const { data } = await api.get<Product[]>(`products/category/${args.category}`, {
        params: {
          limit: args.limit || 10
        }
      })

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
