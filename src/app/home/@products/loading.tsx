import { ProductListSkeleton } from '~/components/product-list-skeleton'

const Loading = () => {
  return (
    <div className="flex flex-wrap px-3 py-7 gap-4 justify-center w-full">
      <ProductListSkeleton size={25} />
    </div>
  )
}

export default Loading
