import '@testing-library/jest-dom'

jest.mock('@t3-oss/env-nextjs', () => ({
  createEnv: jest.fn(() => ({
    NODE_ENV: 'test',
    NEXT_PUBLIC_API_URL: 'https://fakestoreapi.com'
  }))
}))
