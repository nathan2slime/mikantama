import { ProductListSkeleton } from '~/components/product-list-skeleton'

const Loading = () => {
  return (
    <div className="flex flex-col py-7 px-3 justify-center items-center w-full gap-3">
      <div className="flex justify-center flex-wrap gap-4 md:justify-start w-full max-w-7xl mx-auto">
        <ProductListSkeleton size={25} />
      </div>
    </div>
  )
}

export default Loading
