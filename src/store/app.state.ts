import { proxy, subscribe } from 'valtio'
import { getStorage, setStorage } from '~/lib/utils'

type State = {}

const INITIAL: State = {}

export const storageKey = '@mikan/app'

export const appState = proxy<State>(getStorage(storageKey) || INITIAL)

subscribe(appState, () => {
  setStorage(storageKey, appState)
})
