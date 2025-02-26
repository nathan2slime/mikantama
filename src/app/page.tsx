import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'

import { ProductList } from '~/components/product-list'

import { fetchAllProducts } from '~/api/queries/product.query'

const Home = async () => {
  const queryClient = new QueryClient()

  await queryClient.fetchQuery({
    queryKey: ['products'],
    queryFn: fetchAllProducts
  })

  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <h1>Products</h1>
      <ProductList />
    </HydrationBoundary>
  )
}

export default Home
