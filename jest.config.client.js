import baseConfig from './jest.config.js'

export default {
  ...baseConfig,
  testEnvironment: 'jsdom',
  coverageDirectory: "coverage/client",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  displayName: {
    name: 'Client',
    color: 'yellow',
  },
  testMatch: ['<rootDir>/web/test/client/**/*.test.tsx'],
  testPathIgnorePatterns: ['/node_modules/', '/coverage/', '/web/server/', '/web/client/public/'],
  setupFilesAfterEnv: ['<rootDir>/web/test/jest-setup.js']
}