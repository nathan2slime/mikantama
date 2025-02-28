import { ReactNode } from 'react'
import { NewProductDialog } from '~/components/new-product-dialog'

import { AppChildren } from '~/types'

type Props = AppChildren<{
  filter: ReactNode
  products: ReactNode
}>

const HomeLayout = ({ children, filter, products }: Props) => {
  return (
    <div>
      <NewProductDialog />

      {children}
      {filter}
      {products}
    </div>
  )
}

export default HomeLayout
