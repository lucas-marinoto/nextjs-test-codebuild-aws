module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  setupFiles: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
  },
  coveragePathIgnorePatterns: ['/node_modules/'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json',
      diagnostics: false,
    },
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testMatch: ['**/*.(test|spec).(js|jsx|ts|tsx)'],
  testEnvironment: 'jsdom',
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'reports-junit-aws',
        outputName: 'aws-report-tests.xml',
      },
    ],
  ],
}
