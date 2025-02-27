import { z } from 'zod'

export const queryParamsProductSchema = z.object({
  category: z.string().min(1)
})

export type QueryParamsProductSchema = z.infer<typeof queryParamsProductSchema>
