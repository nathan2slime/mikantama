import { z } from 'zod'

export const queryParamsProductSchema = z.object({
  category: z.string().optional(),
  limit: z.coerce.number().optional().default(10)
})

export type QueryParamsProductSchema = z.infer<typeof queryParamsProductSchema>

export const baseProductSchema = z.object({
  title: z.string().min(1).max(30),
  description: z.string(),
  price: z.coerce.number().positive().min(0.1).max(9999999),
  image: z.string().url()
})

export const newProductSchema = baseProductSchema.merge(
  z.object({
    category: z.string().min(1)
  })
)
export type NewProductSchema = z.infer<typeof newProductSchema>

export const editProductSchema = newProductSchema.partial()
export type EditProductSchema = z.infer<typeof editProductSchema>
