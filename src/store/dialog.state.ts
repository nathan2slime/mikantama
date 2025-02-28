import { proxy } from 'valtio'

type State = {
  isOpenNewProduct: boolean
}

const INITIAL: State = {
  isOpenNewProduct: false
}

export const dialogState = proxy<State>(INITIAL)
