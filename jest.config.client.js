import baseConfig from './jest.config.js'

export default {
  ...baseConfig,
  testEnvironment: 'jsdom',
  coverageDirectory: "coverage/client",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper: {
    "\\.scss$": '<rootDir>/web/test/mocks/emptyObject.js',
    '^@components/(.*)$': '<rootDir>/web/client/src/component/$1'
  },
  displayName: {
    name: 'Client',
    color: 'yellow',
  },
  testMatch: ['<rootDir>/web/test/client/**/*.test.tsx'],
  testPathIgnorePatterns: ['/node_modules/', '/coverage/', '/web/server/', '/web/client/public/'],
  setupFilesAfterEnv: ['<rootDir>/web/test/jest-setup.js']
}