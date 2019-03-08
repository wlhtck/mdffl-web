module.exports = {
  collectCoverageFrom: [
    'components/**/*.{js,jsx}',
    'pages/**/*.{js,jsx}',
    'server/**/*.{js,jsx}',
    '!**/__spec__/**/*.{js,jsx}',
  ],
  coverageThreshold: {
    global: {
      statements: 60,
      branches: 60,
      functions: 60,
      lines: 60,
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
