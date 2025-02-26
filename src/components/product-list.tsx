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

  return (
    <div className="flex flex-wrap w-full">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}
