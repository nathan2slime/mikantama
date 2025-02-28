import '@testing-library/jest-dom'

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn()
}))

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
  queryOptions: jest.fn(),
  useMutation: jest.fn(),
  useQueryClient: jest.fn()
}))

jest.mock('~/hooks/use-search-products', () => ({
  useSearchProducts: jest.fn()
}))

jest.mock('@t3-oss/env-nextjs', () => ({
  createEnv: jest.fn(() => ({
    NODE_ENV: 'test',
    NEXT_PUBLIC_API_URL: 'https://fakestoreapi.com'
  }))
}))

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn()
}))
