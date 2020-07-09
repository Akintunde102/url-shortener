module.exports = {
    roots: [
      "<rootDir>",
      "server"
    ],
    testMatch: [
      "**/server/__tests__/**/*.test.+(ts|tsx|js)"
    ],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
    testEnvironment: 'node',
    "moduleFileExtensions": [
      "js",
      "json",
      "node",
      "ts"
    ],
    "moduleDirectories": [
      "node_modules",
      "server"
    ],
  }