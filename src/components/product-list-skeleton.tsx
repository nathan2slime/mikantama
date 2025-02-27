import { ProductCardSkeleton } from '~/components/product-card-skeleton'

type Props = {
  size: number
}

export const ProductListSkeleton = ({ size = 25 }: Props) => {
  return Array.from(Array(size).keys()).map(key => <ProductCardSkeleton key={`product-skeleton-${key}`} />)
}
