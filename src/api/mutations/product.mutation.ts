import { api } from '~/api'
import { NewProductSchema } from '~/lib/schemas/product.schema'
import { Product } from '~/types/product.types'

export const createProductMutation = async (payload: NewProductSchema) => {
  const { data } = await api.post<Product>('/products', payload)

  return data
}
