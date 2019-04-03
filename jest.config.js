const { defaults } = require("jest-config");

module.exports = {
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
    "ts",
    "tsx",
  ],
  moduleNameMapper: {
    "\\.(scss)$": "<rootDir>/../../tests/styleMock",
    "\\.(jpg|png)$": "<rootDir>/../../tests/fileMock",
    "heroes-(.*)": "<rootDir>/../heroes-$1/src",
  },
  setupFiles: [
    "<rootDir>/../../tests/setup.ts",
  ],
  testEnvironment: "node",
  testMatch: [
    "**/*.test.(ts|tsx)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
