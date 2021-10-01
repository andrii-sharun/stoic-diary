import baseConfig from './jest.config.js'

export default {
  ...baseConfig,
  testEnvironment: 'node',
  coverageDirectory: "coverage/server",
  displayName: {
    name: 'Server',
    color: 'blue',
  },
  testMatch: ['<rootDir>/web/test/server/**/*.test.js'],
  testPathIgnorePatterns: ['/node_modules/', '/coverage/', '/web/client/'],
}