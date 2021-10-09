module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
  },
  moduleFileExtensions: [
    'js',
    'vue',
    'json'
  ],
  moduleDirectories: [
    "node_modules",
    "components",
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  transformIgnorePatterns: ["/node_modules/"],
  watchman: false,
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  collectCoverage: true,
  collectCoverageFrom: ["**/*.{js,vue}", "!**/node_modules/**"],
  testEnvironment: "jsdom"
}
