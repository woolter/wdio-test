export const config = {
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 5,
      browserName: "chrome",
      acceptInsecureCerts: true,
      platformName: "ANY"
    }
  ],
  hostname: "localhost",
  port: 4444,
  path: "/",
  logLevel: "debug",
  bail: 0,
  baseUrl: "http://localhost",
  waitforTimeout: 10000,
  connectionRetryCount: 3,
  services: ["docker"],
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
    compilers: ["tsconfig-paths/register"]
  },
  specs: ["./src/specs/**/*.ts"]
}