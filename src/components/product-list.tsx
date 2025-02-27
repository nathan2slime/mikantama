'use client'

import { useQuery } from '@tanstack/react-query'

import { fetchAllProducts, filterProducts } from '~/api/queries/product.query'
import { ProductCard } from '~/components/product-card'
import { ProductListSkeleton } from '~/components/product-list-skeleton'
import { QueryParamsProductSchema } from '~/lib/schemas/product.schema'

type Props = {
  queryParams: QueryParamsProductSchema
}

export const ProductList = ({ queryParams }: Partial<Props>) => {
  const { data = [], isFetching, isLoading } = queryParams ? useQuery(filterProducts(queryParams)) : useQuery(fetchAllProducts)

  const products = (data || []).sort((prev, product) => product.rating.rate - prev.rating.rate)

  return (
    <div className="flex flex-wrap px-3 py-7 gap-4 justify-center w-full max-w-7xl mx-auto">
      {isFetching || isLoading ? (
        <ProductListSkeleton size={products.length === 0 ? 25 : products.length} />
      ) : (
        products.map(product => <ProductCard key={product.id} {...product} />)
      )}
    </div>
  )
}
