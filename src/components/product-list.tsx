'use client'

import { useQuery } from '@tanstack/react-query'
import { ChevronDown } from 'lucide-react'
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

  const sortedProductsByPrice = searchParams.price ? data.sort((a, b) => (searchParams.price === 'desc' ? a.price - b.price : b.price - a.price)) : data

  const products =
    searchParams.price === 'featured' || searchParams.price === undefined ? data.sort((prev, product) => product.rating.rate - prev.rating.rate) : sortedProductsByPrice

  return (
    <div className="flex flex-col py-7 px-3 justify-center items-center w-full gap-3">
      <div className="flex justify-center flex-wrap gap-4 md:justify-start w-full max-w-7xl mx-auto">
        {isFetching || isLoading ? (
          <ProductListSkeleton size={products.length === 0 ? 25 : products.length} />
        ) : (
          sortedProductsByPrice.map(product => <ProductCard key={product.id} {...product} />)
        )}
      </div>

      {lastSize < products.length && (
        <Button
          className="w-fit rounded-2xl mt-4"
          variant="outline"
          disabled={lastSize >= products.length}
          onClick={() => {
            setLastSize(products.length)
            onSearch({ limit: (limit + 10).toString() })
          }}
        >
          <ChevronDown />
          Load more
        </Button>
      )}
    </div>
  )
}
