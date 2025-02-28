import { proxy } from 'valtio'

type State = {
  isOpenNewProduct: boolean
  isOpenEditProduct: boolean
}

const INITIAL: State = {
  isOpenEditProduct: false,
  isOpenNewProduct: false
}

export const dialogState = proxy<State>(INITIAL)
