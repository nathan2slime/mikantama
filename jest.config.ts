import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './'
})

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1'
  },
  globals: {
    NODE_ENV: 'test',
    'ts-jest': {
      useESM: true
    }
  },
  testEnvironment: 'jsdom'
}

export default createJestConfig(config)
