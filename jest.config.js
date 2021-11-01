module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/mocks/fileMock.js",
    "\\.(css|less|scss|bpmn|xml)$": "identity-obj-proxy",
  },
  modulePathIgnorePatterns: ["<rootDir>/build", "<rootDir>/node_modules"],
  testPathIgnorePatterns: ["/node_modules/(?!bpmn-js)(.*)"],
  transformIgnorePatterns: ["/node_modules/(?!bpmn-js)(.*)"],
};
