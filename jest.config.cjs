module.exports = {
  roots: ["<rootDir>/src"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTest.ts"],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
  ],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
    "^.+\\.css$": "jest-transform-css",
  },
  moduleNameMapper: { "@/(.*)$": "<rootDir>/src/$1" },
  passWithNoTests: true,
  resetMocks: false,
  collectCoverage: true,
  coverageReporters: ["json", "html"],
};
