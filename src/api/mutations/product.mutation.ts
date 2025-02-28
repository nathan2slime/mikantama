import { api } from '~/api'
import { EditProductSchema, NewProductSchema } from '~/lib/schemas/product.schema'
import { Product } from '~/types/product.types'

export const createProductMutation = async (payload: NewProductSchema) => {
  const { data } = await api.post<Product>('/products', payload)

  return data
}

type EditProductMutationArgs = {
  id: number
  data: EditProductSchema
}

export const editProductMutation = async (args: EditProductMutationArgs) => {
  const { data } = await api.put<Product>(`/products/${args.id}`, args.data)

  return data
}
