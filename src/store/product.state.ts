import { proxy } from 'valtio'

import { Product } from '~/types/product.types'

type State = {
  editedProduct: Product | undefined
}

const INITIAL: State = {
  editedProduct: undefined
}

export const productState = proxy<State>(INITIAL)
