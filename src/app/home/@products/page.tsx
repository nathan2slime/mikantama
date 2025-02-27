import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'

import { ProductList } from '~/components/product-list'

import { fetchAllProducts, filterProducts } from '~/api/queries/product.query'
import { queryParamsProductSchema } from '~/lib/schemas/product.schema'

export const dynamic = 'force-dynamic'

type Props = {
  searchParams: Promise<Partial<Record<string, string>>>
}

const Products = async ({ searchParams }: Props) => {
  const queryClient = new QueryClient()

  const queryParams = queryParamsProductSchema.safeParse(await searchParams)
  const queryParamsParsed = queryParams.data || { limit: 10, category: undefined }

  if (queryParamsParsed) {
    if (queryParamsParsed.category) {
      await queryClient.fetchQuery(filterProducts(queryParamsParsed))
    } else {
      await queryClient.fetchQuery(fetchAllProducts(queryParamsParsed))
    }
  }

  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <ProductList isFiltered={!!(queryParamsParsed && queryParamsParsed.category)} queryParams={queryParamsParsed} />
    </HydrationBoundary>
  )
}

export default Products
