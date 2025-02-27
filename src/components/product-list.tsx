'use client'

import { useQuery } from '@tanstack/react-query'

import { fetchAllProducts } from '~/api/queries/product.query'
import { ProductCard } from '~/components/product-card'

export const ProductList = () => {
  const { data = [] } = useQuery({
    queryKey: ['products'],
    queryFn: fetchAllProducts
  })

  const products = data.sort((prev, product) => product.rating.rate - prev.rating.rate)

  const _categories = Array.from(new Set(products.map(product => product.category)))

  return (
    <div className="flex flex-wrap px-3 py-5 gap-3 justify-center w-full">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}
