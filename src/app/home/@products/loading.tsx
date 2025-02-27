import { ProductCardSkeleton } from '~/components/product-card-skeleton'

const Loading = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap px-3 py-7 gap-4 justify-center w-full">
        {Array.from(Array(25).keys()).map(key => (
          <ProductCardSkeleton key={`product-skeleton-${key}`} />
        ))}
      </div>
    </div>
  )
}

export default Loading
