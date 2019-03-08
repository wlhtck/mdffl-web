module.exports = {
  collectCoverageFrom: [
    'components/**/*.{js,jsx}',
    'pages/**/*.{js,jsx}',
    'server/**/*.{js}',
    '!**/__spec__/**/*.{js,jsx}',
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
  testPathIgnorePatterns: [
    'node_modules',
    '.cache',
  ],
};
