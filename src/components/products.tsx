import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'

import { ProductList } from '~/components/product-list'

import { fetchAllProducts, filterProducts } from '~/api/queries/product.query'
import { queryParamsProductSchema } from '~/lib/schemas/product.schema'

type Props = {
  searchParams: Partial<Record<string, string>>
}

export const Products = async ({ searchParams }: Props) => {
  const queryClient = new QueryClient()

  const queryParams = queryParamsProductSchema.safeParse(await searchParams)

  if (queryParams.data) {
    await queryClient.fetchQuery(filterProducts(queryParams.data))
  } else {
    await queryClient.fetchQuery(fetchAllProducts)
  }

  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <ProductList queryParams={queryParams.data} />
    </HydrationBoundary>
  )
}
