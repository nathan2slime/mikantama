'use client'

import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import { fetchAllProducts, filterProducts } from '~/api/queries/product.query'
import { ProductCard } from '~/components/product-card'
import { ProductListSkeleton } from '~/components/product-list-skeleton'
import { Button } from '~/components/ui/button'
import { useSearchProducts } from '~/hooks/use-search-products'
import { QueryParamsProductSchema } from '~/lib/schemas/product.schema'

type Props = {
  queryParams: QueryParamsProductSchema
  isFiltered: boolean
}

export const ProductList = ({ queryParams, isFiltered }: Props) => {
  const [lastSize, setLastSize] = useState(0)

  const { data = [], isFetching, isLoading } = isFiltered ? useQuery(filterProducts(queryParams)) : useQuery(fetchAllProducts(queryParams))

  const searchParams = Object.fromEntries(useSearchParams().entries())
  const limit = Number.parseInt(searchParams.limit) || 10
  const { onSearch } = useSearchProducts(searchParams)

  const products = (data || []).sort((prev, product) => product.rating.rate - prev.rating.rate)

  return (
    <div className="flex flex-col py-7 px-3 justify-center items-center w-full gap-3">
      <div className="flex flex-wrap gap-4 justify-center w-full max-w-7xl mx-auto">
        {isFetching || isLoading ? (
          <ProductListSkeleton size={products.length === 0 ? 25 : products.length} />
        ) : (
          products.map(product => <ProductCard key={product.id} {...product} />)
        )}
      </div>

      {products.length > 0 && (
        <Button
          className="w-fit mt-4"
          variant="secondary"
          disabled={products.length >= lastSize}
          onClick={() => {
            setLastSize(products.length)
            onSearch({ limit: (limit + 10).toString() })
          }}
        >
          Load more
        </Button>
      )}
    </div>
  )
}
