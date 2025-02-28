import { getStorage, setStorage } from '~/lib/utils'

describe('Utils', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })

  it('should save and retrieve an object from localStorage', () => {
    const key = 'temp'
    const value = { categories: [] }

    setStorage(key, value)
    const storedValue = getStorage<typeof value>(key)

    expect(storedValue).toEqual(value)
  })

  it('should return null if the key does not exist', () => {
    console.error = jest.fn()

    const data = getStorage('null')

    expect(data).toBeNull()
    expect(console.error).toHaveBeenCalled()
  })

  it('should handle errors when retrieving invalid JSON', () => {
    const key = 'temp'
    localStorage.setItem(key, expect.anything())

    console.error = jest.fn()

    expect(getStorage(key)).toBeNull()
    expect(console.error).toHaveBeenCalled()
  })
})
