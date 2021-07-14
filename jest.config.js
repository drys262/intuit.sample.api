/* eslint-disable no-undef */
process.env.TZ = 'UTC';

module.exports = {
  reporters: ['default'],
  restoreMocks: true,
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
};
