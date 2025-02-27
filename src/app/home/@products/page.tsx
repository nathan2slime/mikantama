import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'
import { z } from 'zod'

import { ProductList } from '~/components/product-list'

import { fetchAllProducts } from '~/api/queries/product.query'

export const dynamic = 'force-dynamic'

const schema = z.object({
  category: z.string().min(1)
})

type Props = {
  searchParams: Partial<Record<string, string>>
}

const Products = async ({ searchParams }: Props) => {
  const queryClient = new QueryClient()

  const _queryParams = schema.safeParse(searchParams)

  await queryClient.fetchQuery(fetchAllProducts)

  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <ProductList />
    </HydrationBoundary>
  )
}

export default Products
