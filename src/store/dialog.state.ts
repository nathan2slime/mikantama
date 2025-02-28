import { proxy } from 'valtio'

type State = {
  isOpenNewProduct: boolean
  isOpenDeleteProduct: boolean
  isOpenEditProduct: boolean
}

const INITIAL: State = {
  isOpenEditProduct: false,
  isOpenNewProduct: false,
  isOpenDeleteProduct: false
}

export const dialogState = proxy<State>(INITIAL)
