import { ReactNode } from 'react'

import { AppChildren } from '~/types'

type Props = AppChildren<{
  filter: ReactNode
  products: ReactNode
}>

const HomeLayout = ({ children, filter, products }: Props) => {
  return (
    <div>
      {children}
      {filter}
      {products}
    </div>
  )
}

export default HomeLayout
