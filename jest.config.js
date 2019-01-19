module.exports = {
  collectCoverageFrom: [
    'components/**/*.{js,jsx}',
    'pages/**/*.{js,jsx}',
    'util/**/*.{js,jsx}',
    '!components/**/*.test.{js,jsx}',
    '!components/**/*.stories.{js,jsx}',
    '!pages/**/*.test.{js,jsx}',
    '!pages/**/*.stories.{js,jsx}',
    '!util/**/*.test.{js,jsx}',
    '!util/**/*.stories.{js,jsx}',
  ],
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 91,
      functions: 98,
      lines: 98,
    },
  },
  setupFiles: [
    './test/setup.js',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  testPathIgnorePatterns: [
    'node_modules',
    '.cache',
  ],
};
