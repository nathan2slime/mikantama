import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'

import { fetchAllProducts, fetchProductById } from '~/api/queries/product.query'
import { ProductOverview } from '~/components/product-overview'

export const generateStaticParams = async () => {
  const queryClient = new QueryClient()
  const products = await queryClient.fetchQuery(fetchAllProducts({ category: undefined, limit: 20 }))

  return products.map(({ id }) => ({
    id: id.toString()
  }))
}

type Params = { id: string }
type Props = {
  params: Promise<Params>
}

const Product = async ({ params }: Props) => {
  const queryClient = new QueryClient()

  const id = (await params).id
  await queryClient.fetchQuery(fetchProductById(id))

  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <ProductOverview id={id} />
    </HydrationBoundary>
  )
}

export default Product
