import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'

import { fetchAllCategories } from '~/api/queries/product.query'
import { FilterForm } from '~/components/filter-form'

const Filter = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(fetchAllCategories)

  const dehydratedState = dehydrate(queryClient)

  return (
    <div className="flex pt-7 px-4 items-center max-w-7xl mx-auto justify-between w-full">
      <h1 className="text-2xl text-foreground font-semibold">Products</h1>

      <HydrationBoundary state={dehydratedState}>
        <FilterForm />
      </HydrationBoundary>
    </div>
  )
}

export default Filter
