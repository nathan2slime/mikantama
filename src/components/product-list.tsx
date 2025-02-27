'use client'

import { useQuery } from '@tanstack/react-query'

import { fetchAllProducts } from '~/api/queries/product.query'
import { ProductCard } from '~/components/product-card'

export const ProductList = () => {
  const { data = [] } = useQuery(fetchAllProducts)

  const products = data.sort((prev, product) => product.rating.rate - prev.rating.rate)

  return (
    <div className="flex flex-wrap px-3 py-7 gap-4 justify-center w-full max-w-7xl mx-auto">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}
