module.exports = {
  moduleNameMapper: {
    "\\.(scss)$": "<rootDir>/../../tests/styleMock",
    "\\.(jpg|png)$": "<rootDir>/../../tests/fileMock",
    "test-helpers": "<rootDir>/../../tests/helpers",
  },
  preset: "ts-jest",
  setupFiles: [
    "<rootDir>/../../tests/setup.ts",
  ],
  testEnvironment: "node",
};
