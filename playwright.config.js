import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  expect: {
    timeout: 10_000
  },
  use: {
    headless: true,
    baseURL: 'http://127.0.0.1:8080',
    actionTimeout: 10_000,
    trace: 'retain-on-failure'
  },
  webServer: {
    command: 'npm run start',
    port: 8080,
    reuseExistingServer: true,
    timeout: 120_000
  }
});
