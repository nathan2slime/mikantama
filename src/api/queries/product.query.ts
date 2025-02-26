import { api } from '~/api'
import { Product } from '~/types/product.types'

export const fetchAllProducts = async () => {
  const { data } = await api.get<Product[]>('products')

  return data
}
