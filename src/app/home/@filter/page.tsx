import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'

import { fetchAllCategories } from '~/api/queries/product.query'
import { FilterForm } from '~/components/filter-form'

const Filter = async () => {
  const queryClient = new QueryClient()

  await queryClient.fetchQuery(fetchAllCategories)

  const dehydratedState = dehydrate(queryClient)

  return (
    <div className="flex flex-col gap-2 sm:flex-row pt-7 px-4 items-start md:items-center max-w-7xl mx-auto justify-between w-full">
      <h1 className="text-xl md:text-2xl text-foreground font-bold">Products</h1>

      <HydrationBoundary state={dehydratedState}>
        <FilterForm />
      </HydrationBoundary>
    </div>
  )
}

export default Filter
