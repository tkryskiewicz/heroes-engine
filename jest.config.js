const { defaults } = require("jest-config");

module.exports = {
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
    "ts",
  ],
  moduleNameMapper: {
    "heroes-(.*)": "<rootDir>../heroes-$1/src",
  },
  testEnvironment: "node",
  testMatch: [
    "**/*.test.ts",
  ],
  transform: {
    "^.+\\.(ts)$": "ts-jest",
  },
};
