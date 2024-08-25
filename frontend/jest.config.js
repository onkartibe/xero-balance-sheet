module.exports = {
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    testEnvironment: 'jsdom',
    transformIgnorePatterns: ['/node_modules/(?!(axios)/)'],
  };
  