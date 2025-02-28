import { proxy } from 'valtio'

import { Product } from '~/types/product.types'

type State = {
  editedProduct: Product | undefined
  deletedProduct: string | undefined
}

const INITIAL: State = {
  editedProduct: undefined,
  deletedProduct: undefined
}

export const productState = proxy<State>(INITIAL)
