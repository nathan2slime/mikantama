import { z } from 'zod'

export const queryParamsProductSchema = z.object({
  category: z.string().optional(),
  limit: z.coerce.number().optional().default(10)
})

export type QueryParamsProductSchema = z.infer<typeof queryParamsProductSchema>
